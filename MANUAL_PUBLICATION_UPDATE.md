# Manual Publication Updates Guide

If you need to manually add or update publications, here's how:

## Quick Edit

1. Open [public/publications.json](./public/publications.json)
2. Add your new publication to the `publications` array
3. Run `npm run build` to rebuild

## JSON Format

Each publication must have this structure:

```json
{
  "authors": "Author Name, Another Author",
  "title": "Paper Title",
  "link": "https://link-to-paper.com",
  "journal": "Journal Name Volume (Year) Pages"
}
```

### For HTML in Authors Field
You can add HTML tags for formatting:

```json
{
  "authors": "<strong>Your Name</strong>, Co-Author, Co-Author",
  "title": "Your Paper Title",
  "link": "https://...",
  "journal": "Journal Name (2025)"
}
```

## Example

```json
{
  "publications": [
    {
      "authors": "<strong>Achyut Tiwari</strong>, Himanshu Sharma and Moumita Maiti",
      "title": "Cross section measurement of residues from 11B reactions on Zr: Production of 97Ru",
      "link": "https://link.springer.com/article/10.1140/epjp/s13360-025-07171-6",
      "journal": "European Physical Journal Plus 140 (2025) 1231"
    }
  ],
  "lastUpdated": "2025-08-15T00:00:00.000Z"
}
```

## Getting Links

- **Google Scholar**: Click on the paper → Copy URL from address bar
- **arXiv**: https://arxiv.org/abs/XXXX.XXXXX
- **Journal Website**: Find the DOI link
- **ResearchGate**: Copy your publication link

## Finding Your Links in Google Scholar

1. Go to your profile: https://scholar.google.com/citations?user=ps7Jb1MAAAAJ&hl=en
2. Hover over each publication
3. Click the link icon to get the full URL
4. Copy the URL

## Workflow

1. **Publish paper** → add to Google Scholar
2. **Next build**: Auto-fetcher attempts to grab it
3. **If fails**: Manually add to `public/publications.json`
4. **Deploy**: `npm run deploy`

---

💡 Tip: The automatic fetcher runs every build, so new papers on Google Scholar should appear automatically most of the time. Manual updates are only needed if auto-fetching fails.
