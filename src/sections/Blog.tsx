import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, FileText, Share2 } from "lucide-react";
import SectionFooter from "./SectionFooter";

const asset = (filename: string) => `${import.meta.env.BASE_URL}${encodeURI(filename)}`;
const SITE_ORIGIN = "https://dracht99.github.io/achyut-tiwari";

const TaS2 = () => (
  <>
    1T-TaS<sub>2</sub>
  </>
);

type PostFigure = {
  src: string;
  alt: string;
  caption: React.ReactNode;
};

type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  teaser: string;
  shareUrl: string;
  pdf?: string;
  pdfHindi?: string;
  figure?: PostFigure;
  body: (figure: React.ReactNode) => React.ReactNode;
};

const POSTS: BlogPost[] = [
  {
    id: "weak-links",
    title: "From floating ice to a layered quantum material: why weak links matter",
    date: "September 2026",
    excerpt: "Why ice floats, and what that has to do with the metal-insulator transition in a layered quantum material.",
    teaser:
      "Drop an ice cube into water and it floats. That is unusual: most solids are denser than their liquid and sink in it. The explanation lies in the connections between water molecules. Strong chemical bonds hold each molecule together, while weaker hydrogen bonds link neighboring molecules.",
    shareUrl: `${SITE_ORIGIN}/blog.html`,
    pdf: asset("Research_Blog_by Dracht99_PRL2026.pdf"),
    pdfHindi: asset("Vigyan_Blog_Hindi_1T-TaS2.pdf"),
    figure: {
      src: asset("Figure1Blog.png"),
      alt: "Left: hydrogen bonding in liquid water and in ice. Right: in-plane and out-of-plane resistivity of 1T-TaS2 on cooling and warming, marking the NC-CDW and C-CDW phases.",
      caption: (
        <>
          <strong className="font-semibold text-slate-800">Weak links, large consequences.</strong>{" "}
          <em>Left:</em> Hydrogen bonds continually rearrange in liquid water. In ice, they form an open network, making
          ice less dense than liquid water and allowing it to float. <em>Right:</em> In layered <TaS2 />, the connections
          between sheets shape how electrons move. The graph shows resistivity within the layers (ρ<sub>∥</sub>) and
          across them (ρ<sub>⊥</sub>) during cooling (blue) and warming (red). Between roughly 300 and 200 K, cooling
          lowers resistivity across the layers while raising it within them. Orange regions schematically illustrate the
          active interlayer conduction in the nearly commensurate charge-density-wave phase (NC-CDW). Below about 190 K
          (−83 °C) on cooling, electronic pairing between neighboring layers helps open an insulating gap in the
          commensurate phase (C-CDW). Different microscopic mechanisms, but a shared lesson: interactions between
          strongly bonded building blocks can shape the behavior of the whole material.
        </>
      ),
    },
    body: (figure) => (
      <>
        <p>
          Drop an ice cube into water and it floats. That is unusual: most solids are denser than their liquid and sink
          in it. The explanation lies in the connections between water molecules. Strong chemical bonds hold each
          molecule together, while weaker hydrogen bonds link neighboring molecules. These links already exist in liquid
          water. Cooling favors more open local arrangements, so below about 4 °C the liquid becomes less dense, before
          anything has frozen. Freezing near 0 °C establishes an open crystalline structure. Interactions weaker than
          those inside each molecule have a visible consequence: floating ice, which helps preserve liquid water beneath
          frozen lake surfaces.
        </p>

        <p>
          A similar surprise appears in the layered material <TaS2 />, well known for its charge-density wave (CDW), a
          periodic modulation of electron density accompanied by a distortion of the atomic lattice. Its strongly bonded
          atomic layers are linked by weaker van der Waals forces, so electrons might be expected to move easily along
          the layers and struggle to cross between them. Yet between roughly 300 and 200 K, cooling makes resistance
          rise within the layers and fall across them. The supposedly secondary direction behaves more like an ordinary
          metal.
        </p>

        {figure}

        <p>
          In our recent{" "}
          <a
            href="https://doi.org/10.1103/pwzn-m4d2"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-cyan-700 underline decoration-cyan-300 underline-offset-2 transition-colors hover:text-cyan-600"
          >
            study in <em>Physical Review Letters</em>
          </a>{" "}
          carried out in Prof. Martin Dressel’s group at the University of Stuttgart, we connect this directional
          contrast to the material’s insulating state. Using polarized infrared light and electronic-structure
          calculations, we identify coupling between layers as central to understanding the material’s metal-insulator
          transition.
        </p>

        <p>
          The first clue is the opposite resistance trends. The surprise concerns how conduction changes with
          temperature, rather than the perpendicular direction simply conducting better. Earlier transport studies had
          reported this behavior; the new work reveals a matching contrast in the bulk optical response. Upon cooling,
          the low-energy infrared response associated with mobile charges strengthens across the layers and weakens
          within them. A crystal that can be peeled into thin layers can still have substantial electronic overlap
          between those layers.
        </p>

        <p className="border-l-2 border-cyan-400 pl-4 font-semibold text-slate-900">
          If the interlayer channel is already active, what happens to it when the crystal becomes insulating?
        </p>

        <p>
          The change comes on cooling through about 190 K, or −83 °C. Inside each layer, tantalum atoms form clusters of
          13, shaped like Stars of David. In the metallic phase, these clusters occur in ordered patches separated by
          boundaries. At the transition, the repeating pattern of atoms and electrons becomes locked to the underlying
          lattice, forming a commensurate charge-density wave, and the crystal becomes insulating.
        </p>

        <p>
          For decades, an influential explanation focused on electrons within individual layers. In a simplified
          picture, each cluster contributes one electron to a narrow, half-filled electronic band. Strong repulsion
          could prevent these electrons from moving between clusters, producing a Mott insulator. However, the bulk
          crystal also allows electronic states on neighboring layers to interact. Could that interaction be decisive?
        </p>

        <p>
          To examine this direction, we looked at the crystal from the side. We polished a cross-section with an ion
          beam, chose the infrared polarization to drive charges either within the layers or across them, and followed
          the reflected light as the sample cooled. This allowed us to determine how the optical conductivity changes in
          both directions.
        </p>

        <p>
          Below the transition, low-energy conductivity is suppressed and an optical gap opens: light must supply enough
          energy to excite electrons across the gap. Its temperature evolution differs between the two directions. The
          extracted gap evolves more gradually within the sheets and more abruptly across them. Two methods of
          estimating the gap give the same qualitative contrast, pointing to distinct roles for the in-plane and
          interlayer electronic structures.
        </p>

        <p>
          Calculations provide the second part of the explanation. Among the stacking configurations examined, a
          dimerized arrangement, in which neighboring layers pair up, reproduced both the insulating state and the
          essential perpendicular optical response. The in-plane interband spectral features were much less sensitive to
          the tested arrangements, making the perpendicular measurement particularly informative.
        </p>

        <p>
          The physical picture is electronic pairing between layers. When states on neighboring reconstructed layers
          overlap, they combine into lower-energy bonding states and higher-energy antibonding states. In a simplified
          two-cluster picture, two electrons occupy the bonding state, leaving the antibonding state empty. Crucially,
          the successful stacking calculation produces a gap between the occupied and empty bands. Pairing can therefore
          suppress conduction even though it strengthens the electronic connection within each pair.
        </p>

        <p>
          This alternating pattern of interlayer bonding resembles the distortion that opens a gap in a one-dimensional
          electronic chain, hence the description “Peierls-like interlayer dimerization.” The bulk insulator can be
          understood through electronically paired layers.
        </p>

        <p className="border-l-2 border-cyan-400 pl-4 font-semibold text-slate-900">
          The two findings now connect. The unusual out-of-plane metallicity reveals that the interlayer direction is
          electronically active. On further cooling, its reorganization through dimerization becomes decisive in
          stabilizing the bulk insulating state.
        </p>

        <p>
          The metallic anomaly alone does not prove the pairing mechanism. That conclusion rests on the directional
          optical spectra together with the stacking calculations. Electron repulsion need not disappear, and surfaces
          or unpaired layers may behave differently. In the bulk state studied, however, the combined evidence
          identifies interlayer dimerization as the dominant mechanism opening the gap.
        </p>

        <p>
          That makes stacking a promising variable to control. Earlier studies have linked externally induced conducting
          states to changes in interlayer order. Changing the relative alignment of layers could alter their electronic
          overlap and tune their properties. Controlled sliding and deliberately assembled heterostructures are
          possibilities to explore, rather than devices demonstrated by this study.
        </p>

        <p>
          Water and <TaS2 /> have different microscopic mechanisms. In both, however, interactions between strongly
          bonded building blocks help produce unexpected behavior and shape the state that emerges on cooling.
        </p>

        <p>
          For layered materials, this suggests a practical ambition: keep the ingredients, and change how the sheets sit
          on one another.
        </p>

        <div className="border-t border-slate-200 pt-6">
          <p className="font-semibold text-slate-900">Achyut Tiwari</p>
          <p className="mt-1 text-sm text-slate-600">1. Physikalisches Institut, Universität Stuttgart, Germany</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700">Reference</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            A. Tiwari <em>et al.</em>,{" "}
            <a
              href="https://doi.org/10.1103/pwzn-m4d2"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-cyan-700 underline decoration-cyan-300 underline-offset-2 transition-colors hover:text-cyan-600"
            >
              <em>Phys. Rev. Lett.</em>
            </a>{" "}
            <strong className="font-semibold">137</strong>, 126501 (2026).
          </p>
        </div>
      </>
    ),
  },
];

const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggle = () => setIsOpen((previous) => !previous);

  const handleShare = async (event: React.MouseEvent) => {
    event.stopPropagation();
    const shareData = { title: post.title, text: post.excerpt, url: post.shareUrl };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled the share sheet, nothing to do
      }
      return;
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(post.shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-xl border border-slate-200 border-l-4 border-l-cyan-400 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700">{post.date}</p>
            <h3 className="mt-2 text-xl font-bold leading-snug text-slate-800 sm:text-2xl">{post.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{post.excerpt}</p>
          </div>

          <div className="flex shrink-0 items-start gap-2">
            <div className="relative">
              <button
                type="button"
                aria-label="Share this post"
                onClick={handleShare}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-cyan-400 hover:text-cyan-700"
              >
                <Share2 size={15} />
              </button>
              {copied && (
                <span className="absolute right-0 top-full mt-1.5 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[11px] font-medium text-white shadow-sm">
                  Link copied
                </span>
              )}
            </div>
            <div className="flex flex-col items-stretch gap-2">
              {post.pdf && (
                <a
                  href={post.pdf}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.22)] transition-colors hover:bg-cyan-300"
                >
                  <FileText size={14} />
                  PDF
                </a>
              )}
              {post.pdfHindi && (
                <a
                  href={post.pdfHindi}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  lang="hi"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-cyan-400 px-3 py-2 text-xs font-semibold text-cyan-700 transition-colors hover:bg-cyan-50"
                  style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
                >
                  <FileText size={14} />
                  हिंदी में
                </a>
              )}
            </div>
          </div>
        </div>

        {!isOpen && <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{post.teaser}</p>}

        <button
          type="button"
          aria-expanded={isOpen}
          onClick={toggle}
          className="group/toggle mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-700"
        >
          {isOpen ? "Show less" : "Read more"}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""} group-hover/toggle:text-cyan-700`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-5 border-t border-slate-200 px-5 pb-8 pt-6 text-base leading-8 text-slate-700 sm:px-6">
              {post.body(
                post.figure ? (
                  <figure className="my-8">
                    <img
                      src={post.figure.src}
                      alt={post.figure.alt}
                      className="w-full rounded-xl border border-slate-200 bg-white shadow-sm"
                    />
                    <figcaption className="mt-3 text-sm leading-6 text-slate-600">
                      <span className="font-semibold text-slate-800">Figure 1.</span> {post.figure.caption}
                    </figcaption>
                  </figure>
                ) : null,
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const Blog: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => (
  <div id="blog" className="flex h-full w-full flex-col bg-[#f7f8f5]">
    <div className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog &amp; Perspectives</h2>
      </motion.div>

      <div className="mt-12 max-w-3xl space-y-5">
        {POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
    <SectionFooter sectionId="blog" onNavigate={onNavigate} />
  </div>
);

export default Blog;
