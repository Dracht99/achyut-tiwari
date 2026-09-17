// components/GitHubShowcase.tsx
import React, { useEffect, useState } from "react";
import { Github, Star, GitPullRequest, Code } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  homepage: string | null;
  updated_at: string;
};

type Props = {
  username?: string;
  perPage?: number; // how many repos to fetch & show (excluding pinned which appear first)
  cacheHours?: number;
  pinned?: string[]; // repo names to pin on top (e.g. ['my-lib', 'website'])
};

export default function GitHubShowcase({
  username = "achyut-tiwari",
  perPage = 9,
  cacheHours = 6,
  pinned = [],
}: Props) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cacheKey = `gh_repos_${username}`;

  useEffect(() => {
    let mounted = true;
    async function loadRepos() {
      setLoading(true);
      setError(null);

      try {
        // Try cache
        const cachedRaw = localStorage.getItem(cacheKey);
        if (cachedRaw) {
          try {
            const parsed = JSON.parse(cachedRaw) as { ts: number; data: Repo[] };
            const ageHours = (Date.now() - parsed.ts) / (1000 * 60 * 60);
            if (ageHours < cacheHours) {
              if (mounted) {
                setRepos(parsed.data);
                setLoading(false);
                return;
              }
            }
          } catch {
            // ignore parse errors and refetch
          }
        }

        // Build request
        const endpoint = `https://api.github.com/users/${username}/repos?per_page=${Math.max(
          perPage + pinned.length,
          30
        )}&sort=updated`; // fetch more to allow pinned selection
        const headers: Record<string, string> = { Accept: "application/vnd.github.v3+json" };

        // Optional token (set in environment: NEXT_PUBLIC_GITHUB_TOKEN)
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        if (token) headers.Authorization = `token ${token}`;

        const res = await fetch(endpoint, { headers });
        if (!res.ok) {
          let msg = `GitHub API error: ${res.status} ${res.statusText}`;
          if (res.status === 403) msg = "GitHub rate limit reached (try adding a token)";
          throw new Error(msg);
        }
        const data = (await res.json()) as Repo[];

        // Compose final list: pinned first (if present in fetched list), then top recent repos
        const pinnedRepos: Repo[] = [];
        const otherRepos: Repo[] = [];

        const pinnedSet = new Set(pinned.map((p) => p.toLowerCase()));
        for (const r of data) {
          if (pinnedSet.has(r.name.toLowerCase())) pinnedRepos.push(r);
          else otherRepos.push(r);
        }

        const finalList = [...pinnedRepos, ...otherRepos].slice(0, perPage);

        // cache
        try {
          localStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), data: finalList }));
        } catch {
          // ignore quota errors
        }

        if (mounted) setRepos(finalList);
      } catch (err: any) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to load repos");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadRepos();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, perPage, cacheHours, pinned.join(",")]);

  return (
    <section id="GitHub" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900"> GitHub Projects</h3>
            <p className="text-sm text-slate-600">
               repositories updated from GitHub.
            </p>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            <Github size={16} /> View profile
          </a>
        </div>

        {/* Loading / Error */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: Math.min(perPage, 6) }).map((_, i) => (
              <div key={i} className="p-4 bg-white rounded-xl shadow animate-pulse h-36" />
            ))}
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-md mb-4">
            <strong>Error:</strong> {error}
            <div className="text-xs text-red-600 mt-2">
              Tip: set <code>NEXT_PUBLIC_GITHUB_TOKEN</code> in your env to increase rate limits.
            </div>
          </div>
        )}

        {!loading && !error && (
          <>
            {repos.length === 0 ? (
              <div className="text-sm text-slate-600">No repositories found for <strong>{username}</strong>.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((r) => (
                  <a
                    key={r.id}
                    href={r.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-5 bg-white rounded-xl shadow hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-semibold text-slate-900">{r.name}</h4>
                      <div className="text-xs text-slate-500">{new Date(r.updated_at).toLocaleDateString()}</div>
                    </div>

                    <p className="text-sm text-slate-600 mt-2 min-h-[2.2rem]">{r.description ?? <span className="italic text-slate-400">No description</span>}</p>

                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-4">
                      <span className="inline-flex items-center gap-2">
                        <Star className="w-4 h-4" /> {r.stargazers_count}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <GitPullRequest className="w-4 h-4" /> {r.forks_count}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Code className="w-4 h-4" /> {r.language ?? "—"}
                      </span>
                      {r.homepage && (
                        <a
                          href={r.homepage}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto text-xs text-sky-600 hover:underline"
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            )}

            <div className="mt-6 text-center">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-white"
              >
                <Github /> See more on GitHub
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
