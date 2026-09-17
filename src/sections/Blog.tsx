import React from "react";
import { motion } from "framer-motion";
import SectionFooter from "./SectionFooter";

const posts = [
  {
    date: "September 2026",
    title: "A new paper on 1T-TaS₂ is in press",
    body: `I'm glad to share that our latest work on the correlated van der Waals material 1T-TaS₂ has been accepted and is now in press at Physical Review Letters.

The short version: the insulating gap in this material has been debated for years. Is it set by what happens inside a single layer, or by how the layers stack on top of each other? By pairing infrared spectroscopy with first-principles calculations, we found that the stacking between layers plays a decisive role.

What I enjoyed most was the back-and-forth between experiment and theory — the measurements kept raising questions that only the calculations could answer, and the other way around.

I'll post a longer, plain-language explainer soon on why layered materials behave so differently from ordinary crystals. Until then, thanks for reading, and feel free to reach out if you work on similar systems.`,
  },
];

const Blog: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => (
  <div id="blog" className="flex h-full w-full flex-col bg-[#f7f8f5]">
    <div className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Notes from the lab</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">News &amp; Blog</h2>
      </motion.div>

      <div className="mt-12 max-w-3xl space-y-10">
        {posts.map((post) => (
          <motion.article key={post.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-t-2 border-slate-300 pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700">{post.date}</p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight">{post.title}</h3>
            <div className="mt-5 space-y-5 text-base leading-8 text-slate-700">
              {post.body.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
    <SectionFooter sectionId="blog" onNavigate={onNavigate} />
  </div>
);

export default Blog;
