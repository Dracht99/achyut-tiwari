import https from 'https';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCHOLAR_ID = 'ps7Jb1MAAAAJ';
const OUTPUT_FILE = path.join(__dirname, '../public/publications.json');
const TIMEOUT = 15000; // 15 second timeout

// Fallback publications from your current list
const FALLBACK_PUBLICATIONS = [
  {
    authors: "<strong>Achyut Tiwari</strong>, Himanshu Sharma and Moumita Maiti",
    title: "Cross section measurement of residues from 11B reactions on Zr: Production of 97Ru",
    link: "https://link.springer.com/article/10.1140/epjp/s13360-025-07171-6",
    journal: "European Physical Journal Plus 140 (2025) 1231"
  },
  {
    authors: "A. Trigilio, L. Sabbatini, A. Alexandrov, B. Alpat, G. Ambrosi, S. Argirò, <strong>Achyut Tiwari</strong>, ...",
    title: "Characterization of a permanent magnetic dipolar system for the FOOT experiment",
    link: "https://iopscience.iop.org/article/10.1088/1748-0221/20/09/T09010",
    journal: "Journal of Instrumentation 20 (09), T09010 (2025)"
  },
  {
    authors: "<strong>Achyut Tiwari</strong> and Moumita Maiti",
    title: "Analysis of residual cross section from 11B-induced reaction on Zr",
    link: "https://inspirehep.net/literature/2877428",
    journal: "DAE Symp. Nucl. Phys. 68 (2025) 399–400"
  },
  {
    authors: "Suchorita Paul, S. Bhattacharyya et al.",
    title: "Observation of the rotational bands in 123Te",
    link: "https://inspirehep.net/literature/2877432",
    journal: "DAE Symp. Nucl. Phys. 68 (2025) 401–402"
  },
  {
    authors: "<strong>Achyut Tiwari</strong> et al.",
    title: "In-beam γ-ray spectroscopy of 69Ge",
    link: "https://inspirehep.net/files/f4641f4fd6aeb3f8e24a72537413a0c5",
    journal: "DAE Symp. Nucl. Phys. 67 (2024) 99–100"
  },
  {
    authors: "Sramana Biswas, <strong>Achyut Tiwari</strong> et al.",
    title: "Yield distribution of fusion evaporation reaction 28Si + 48Ti",
    link: "https://inspirehep.net/files/7ea5acd798e644d724b427da46ae0ead",
    journal: "DAE Symp. Nucl. Phys. 67 (2024) 201–202"
  },
  {
    authors: "A. Basak, <strong>Achyut Tiwari</strong> et al.",
    title: "Coexisting Features in 68Zn",
    link: "https://inspirehep.net/files/c187de064ddf8cd540b7c80dae7f613e",
    journal: "DAE Symp. Nucl. Phys. 66 (2023) 121–122"
  },
  {
    authors: "A.K. Mondal, <strong>Achyut Tiwari</strong> et al.",
    title: "Low-lying level sequences in 76As",
    link: "https://inspirehep.net/files/c20ac04331f57b46e0c9ccd001f724b2",
    journal: "DAE Symp. Nucl. Phys. 65 (2022) 77–78"
  }
];

// Parse HTML using Cheerio
function parsePublications(html) {
  const publications = [];
  const $ = cheerio.load(html);
  
  // Try multiple selectors as Google Scholar HTML can vary
  const selectors = [
    'tr.gsc_a_tr',
    'div.gsc_a_t',
    '[data-article-list] tr'
  ];
  
  for (const selector of selectors) {
    const elements = $(selector);
    if (elements.length > 0) {
      console.log(`✓ Found publications using selector: ${selector}`);
      
      elements.each((index, element) => {
        try {
          const $row = $(element);
          
          // Extract title and link
          const $titleLink = $row.find('a.gsc_a_at');
          const title = $titleLink.text().trim();
          const link = $titleLink.attr('href');
          
          // Extract authors and other info from the gray text
          const $greyTexts = $row.find('span.gs_gray');
          const authors = $greyTexts.eq(0).text().trim();
          const journal = $greyTexts.eq(1).text().trim();
          
          if (title && authors) {
            publications.push({
              authors,
              title,
              link: link ? (link.startsWith('http') ? link : `https://scholar.google.com${link}`) : '',
              journal
            });
            console.log(`  ✓ "${title.substring(0, 50)}..."`);
          }
        } catch (e) {
          console.debug(`  Skipped entry at index ${index}`);
        }
      });
      
      if (publications.length > 0) break;
    }
  }
  
  return publications;
}

async function fetchPublications() {
  return new Promise((resolve, reject) => {
    const url = `https://scholar.google.com/citations?user=${SCHOLAR_ID}&hl=en`;
    
    console.log(`Fetching from Google Scholar: ${url}`);
    
    const request = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      },
      timeout: TIMEOUT
    }, async (res) => {
      let data = '';
      console.log(`Response status: ${res.statusCode}`);
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', async () => {
        try {
          const publications = parsePublications(data);
          
          if (publications.length === 0) {
            console.warn('\n⚠ Could not extract publications from Google Scholar HTML.');
            console.warn('  This may be due to JavaScript rendering or HTML structure changes.');
            console.log('\n💡 Recommendation: Use one of these alternatives:');
            console.log('  1. Export your publications from Google Scholar manually and add to publications-custom.json');
            console.log('  2. Use ORCID API (provides official, validated publication data)');
            console.log('  3. Check back later - Google Scholar HTML may change again\n');
            reject(new Error('No publications extracted'));
            return;
          }
          
          // Save to JSON
          await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
          await fs.writeFile(OUTPUT_FILE, JSON.stringify({ publications, lastUpdated: new Date().toISOString() }, null, 2));
          
          console.log(`\n✓ Successfully fetched and saved ${publications.length} publications`);
          resolve(publications);
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', (err) => {
      console.error('Network error:', err.message);
      reject(err);
    }).on('timeout', () => {
      request.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function saveFallbackPublications() {
  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, JSON.stringify({ publications: FALLBACK_PUBLICATIONS, lastUpdated: new Date().toISOString() }, null, 2));
  console.log('✓ Using fallback publications (your current list)');
}

// Run the script
console.log('Starting publication fetch from Google Scholar...\n');
fetchPublications()
  .then((pubs) => {
    console.log(`✓ Publications saved to ${OUTPUT_FILE}`);
    process.exit(0);
  })
  .catch(async (err) => {
    console.error('✗ Error fetching publications:', err.message);
    console.log('\nFalling back to cached/default publications...');
    await saveFallbackPublications();
    process.exit(0); // Exit success to not block builds
  });
