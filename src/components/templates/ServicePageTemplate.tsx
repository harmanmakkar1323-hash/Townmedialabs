import Link from "next/link";
import type { ServicePageData } from "@/data/servicePages";
import { getImagesForService } from "@/data/portfolioImages";
import Image from "next/image";
import StatsSection from "@/components/ui/StatsSection";
import ScrollRevealContainer from "@/components/ui/ScrollRevealContainer";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { ServicePageExtras } from "@/lib/locationServiceData";

/* CSS class helper — keeps scroll-reveal + delay classes from being stripped by formatters */
const sr = "scroll-reveal";
const srFade = "scroll-reveal-fade";
const srScale = "scroll-reveal-scale";
const srScaleX = "scroll-reveal-scaleX";
const delays = [
  "", "scroll-delay-1", "scroll-delay-2", "scroll-delay-3", "scroll-delay-4",
  "scroll-delay-5", "scroll-delay-6", "scroll-delay-7", "scroll-delay-8",
  "scroll-delay-9", "scroll-delay-10", "scroll-delay-11",
] as const;
function srDelay(i: number) { return `${sr} ${delays[Math.min(i + 1, 11)] ?? ""}`; }

function FeatureCard({ feature, index }: { feature: { title: string; description: string }; index: number }) {
  return (
    <div
      className={`${srDelay(index)} group relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500`}
    >
      <div className="absolute top-6 right-6 text-[10px] text-white font-mono">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff4500]/20 transition-colors">
        <div className="w-2 h-2 rounded-full bg-[#ff4500]" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
      <p className="text-sm text-white leading-relaxed">{feature.description}</p>
    </div>
  );
}

function ProcessStep({ step, index, total }: { step: { step: string; title: string; description: string }; index: number; total: number }) {
  return (
    <div className={`${srDelay(index)} relative`}>
      {/* Connector line */}
      {index < total - 1 && (
        <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-[#ff4500]/30 to-transparent z-0" style={{ width: "calc(100% - 2rem)" }} />
      )}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-[#ff4500]/10 border border-[#ff4500]/20 flex items-center justify-center text-[#ff4500] font-bold text-lg">
            {step.step}
          </div>
          <div className="lg:hidden flex-1 h-[1px] bg-white/[0.06]" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
        <p className="text-sm text-white leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}

/** Highlight stat numbers within text (e.g. "23%", "20–30%", "$1.2M") */
function highlightStats(text: string): React.ReactNode {
  const statPattern = /(\$?\₹?[\d,]+(?:\.[\d]+)?(?:–[\d,]+(?:\.[\d]+)?)?(?:%|x|\+|M|K|B))/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = statPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<span key={match.index} className="text-[#ff4500] font-semibold">{match[1]}</span>);
    lastIndex = statPattern.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

/* ─── Deep Content — editorial layout with image + content side-by-side ─── */
function DeepContentRenderer({ section, sectionIndex, image }: { section: { heading: string; paragraphs: string[] }; sectionIndex: number; image?: { src: string; alt: string } }) {
  const variant = sectionIndex % 3;
  const flipSide = sectionIndex % 2 === 1;

  return (
    <div className="relative">
      {/* Section number + divider */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-xs font-mono text-[#ff4500]/50 font-bold">
          {String(sectionIndex + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ff4500]/20 to-transparent" />
      </div>

      {/* Variant 0: Image left/right + content — magazine-style split */}
      {variant === 0 && (
        <div className={`flex flex-col ${flipSide ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-start`}>
          {image && (
            <div className="md:w-[42%] flex-shrink-0 md:sticky md:top-32">
              <div className="relative aspect-[3/4] min-h-[350px] overflow-hidden rounded-2xl border border-white/[0.06]">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover" loading="lazy" />
              </div>
            </div>
          )}
          <div className={image ? "md:w-[58%]" : ""}>
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-medium text-white leading-tight mb-8">
              {section.heading}<span className="text-[#ff4500]">.</span>
            </h2>
            {section.paragraphs[0] && (
              <p className="text-sm md:text-[15px] text-white/80 leading-[1.9] max-w-[60ch] mb-6">
                {highlightStats(section.paragraphs[0])}
              </p>
            )}
            {section.paragraphs.length > 1 && (
              <div className="h-px bg-gradient-to-r from-[#ff4500]/15 to-transparent mb-6" />
            )}
            {section.paragraphs.length > 1 && (
              <div className="space-y-6">
                {section.paragraphs.slice(1).map((p, pi) => (
                  <p key={pi} className="text-sm md:text-[15px] text-white/80 leading-[1.9] max-w-[60ch]">
                    {highlightStats(p)}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Variant 1: Full-width heading + pull quote + paragraphs, image as inline break */}
      {variant === 1 && (
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-medium text-white leading-tight mb-10">
            {section.heading}<span className="text-[#ff4500]">.</span>
          </h2>
          {section.paragraphs[0] && (
            <div className="mb-10 pl-6 border-l-2 border-[#ff4500]/40">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed italic font-light">
                {section.paragraphs[0].match(/^[^.!?]+[.!?]/)?.[0] || section.paragraphs[0].slice(0, 140)}
              </p>
            </div>
          )}
          {section.paragraphs[0] && (
            <p className="text-sm md:text-[15px] text-white/80 leading-[1.9] max-w-3xl mb-6">
              {highlightStats(section.paragraphs[0])}
            </p>
          )}
          {image && (
            <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl border border-white/[0.06] my-8">
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 80vw" className="object-cover" loading="lazy" />
            </div>
          )}
          <div className="space-y-6">
            {section.paragraphs.slice(1).map((p, pi) => (
              <p key={pi} className="text-sm md:text-[15px] text-white/80 leading-[1.9] max-w-3xl">
                {highlightStats(p)}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Variant 2: Image right/left + numbered content blocks */}
      {variant === 2 && (
        <div className={`flex flex-col ${flipSide ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-start`}>
          {image && (
            <div className="md:w-[40%] flex-shrink-0 md:sticky md:top-32">
              <div className="relative aspect-[3/4] min-h-[400px] overflow-hidden rounded-2xl border border-white/[0.06]">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" loading="lazy" />
              </div>
            </div>
          )}
          <div className={image ? "md:w-[60%]" : ""}>
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-medium text-white leading-tight mb-10">
              {section.heading}<span className="text-[#ff4500]">.</span>
            </h2>
            <div className="space-y-8">
              {section.paragraphs.map((p, pi) => (
                <div key={pi} className="flex gap-6 items-start">
                  <span className="text-4xl md:text-5xl font-light text-[#ff4500]/20 leading-none select-none flex-shrink-0 -mt-1">
                    {String(pi + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm md:text-[15px] text-white/80 leading-[1.9] pt-1 max-w-[60ch]">
                    {highlightStats(p)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  return (
    <details
      className={`${srDelay(index)} group border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/[0.1] transition-colors`}
    >
      <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none text-white font-medium text-sm md:text-base">
        <span className="pr-4">{faq.q}</span>
        <span className="text-white text-xl transition-transform duration-300 group-open:rotate-45 flex-shrink-0">+</span>
      </summary>
      <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-white leading-relaxed border-t border-white/[0.04] pt-4">
        {faq.a}
      </div>
    </details>
  );
}

export default function ServicePageTemplate({ data, extras }: { data: ServicePageData; extras: ServicePageExtras }) {
  const relatedData = extras.relatedServices;

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <InnerNavbar />

      {/* Hero Section */}
      <section className="hero-orange-gradient relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto mb-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: data.title, href: `/services/${data.slug}` },
          ]} />
        </div>
        {/* Background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px] pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#ff4500]/[0.02] blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="hero-fade-up">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-[11px] text-white tracking-[0.2em] uppercase hover:text-white transition-colors mb-8"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
            {data.title}
            <span className="text-[#ff4500]">.</span>
          </h1>

          <p className="hero-fade-up hero-delay-2 text-lg md:text-xl text-white font-medium mb-4">
            {data.tagline}
          </p>

          <p className="hero-fade-up hero-delay-3 text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto mb-10">
            {data.heroDescription}
          </p>

          <div className="hero-fade-up hero-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
            >
              Get a Free Quote
            </Link>
            <a
              href="mailto:info@townmedialabs.com"
              className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={data.stats} />

      {/* Features Section */}
      <ScrollRevealContainer>
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-[#ff4500]/[0.02] blur-[120px] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl">
            <p className={`${srFade} text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4`}>
              {data.title} Services We Offer
            </p>
            <h2 className={`${sr} ${delays[1]} text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16`}>
              Our {data.title} Services for Growing Businesses
              <span className="text-[#ff4500]">.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(() => {
                const chunkSize = 3;
                const chunks: (typeof data.features)[] = [];
                for (let c = 0; c < data.features.length; c += chunkSize) {
                  chunks.push(data.features.slice(c, c + chunkSize));
                }
                return chunks.map((chunk, ci) => (
                  <div key={ci} className="contents">
                    {chunk.map((feature, i) => (
                      <FeatureCard key={feature.title} feature={feature} index={ci * chunkSize + i} />
                    ))}
                  </div>
                ));
              })()}
            </div>
          </div>
        </section>
      </ScrollRevealContainer>

      {/* Group: SEO Content, Deep Content, Pricing, Process sections */}
      <div className="contents">

      {/* SEO Content Section — card-style with accent border */}
      {data.seoContent && data.seoContent.length > 0 && (
        <ScrollRevealContainer>
          <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
            <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-[#ff4500]/[0.02] rounded-full blur-[120px] pointer-events-none" />
            <div className="relative mx-auto max-w-5xl">
              <div className="flex items-center gap-4 mb-10">
                <p className={`${srFade} text-[10px] md:text-xs text-white tracking-[0.25em] uppercase font-semibold`}>
                  Why Choose {data.title} Services
                </p>
                <div className={`${srScaleX} flex-1 h-[1px] bg-white/[0.06] origin-left`} />
              </div>

              <h2 className={`${sr} ${delays[1]} text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12`}>
                Why Your Business Needs Professional {data.title} Services
                <span className="text-[#ff4500]">.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {data.seoContent.map((paragraph, i) => (
                  <div
                    key={i}
                    className={`${srDelay(i)} group relative p-6 md:p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500`}
                  >
                    <div className="absolute top-5 right-5 text-3xl font-bold text-[#ff4500]/[0.06] select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="w-8 h-[2px] bg-[#ff4500]/40 rounded-full mb-5 group-hover:w-12 transition-all duration-500" />
                    <p className="text-sm text-white leading-relaxed">{paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollRevealContainer>
      )}

      {/* Deep Content Sections — image + content editorial layouts */}
      {data.deepContent && data.deepContent.length > 0 && (() => {
        const sectionImages = getImagesForService(data.slug, data.deepContent.length);
        return (
          <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
            <div className="relative mx-auto max-w-5xl">
              <div className="space-y-16 md:space-y-24">
                {data.deepContent.map((section, sectionIndex) => (
                  <DeepContentRenderer
                    key={section.heading}
                    section={section}
                    sectionIndex={sectionIndex}
                    image={sectionImages[sectionIndex]}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Portfolio Showcase — visual work samples */}
      {(() => {
        const images = getImagesForService(data.slug, 6);
        if (images.length === 0) return null;
        return (
          <ScrollRevealContainer>
            <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
              <div className="relative mx-auto max-w-7xl">
                <p className={`${srFade} text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4`}>
                  Our Work
                </p>
                <h2 className={`${sr} ${delays[1]} text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16`}>
                  {data.title} Work We&apos;re Proud Of
                  <span className="text-[#ff4500]">.</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {images.map((img, i) => (
                    <div
                      key={img.src}
                      className={`${srDelay(i)} relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] group ${i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"}`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs text-white/90 leading-relaxed">{img.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollRevealContainer>
        );
      })()}

      {/* Pricing Note — prominent CTA-style card */}
      {data.pricingNote && (
        <ScrollRevealContainer>
          <section className="relative w-full px-6 py-12 md:py-16 lg:px-12 bg-[#080808]">
            <div className="relative mx-auto max-w-4xl">
              <div className={`${sr} relative p-[1px] rounded-2xl overflow-hidden`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff4500]/30 via-[#ff4500]/5 to-[#ff4500]/20 opacity-60" />
                <div className="relative bg-[#0a0a0a] rounded-2xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[#ff4500]/10 border border-[#ff4500]/20 flex items-center justify-center">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] text-[#ff4500]/60 tracking-[0.2em] uppercase font-semibold mb-2">Transparent Pricing</p>
                      <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">{data.title} Pricing &amp; Investment</h2>
                      <p className="text-sm md:text-[15px] text-white leading-[1.8] mb-6">{data.pricingNote}</p>
                      <Link
                        href="/contact/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_20px_rgba(255,69,0,0.25)]"
                      >
                        Get a Custom Quote
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollRevealContainer>
      )}

      {/* Process Section */}
      <ScrollRevealContainer>
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
          <div className="relative mx-auto max-w-7xl">
            <p className={`${srFade} text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4`}>
              How Our {data.title} Agency Works
            </p>
            <h2 className={`${sr} ${delays[1]} text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16`}>
              Our Proven {data.title} Process — Step by Step
              <span className="text-[#ff4500]">.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
              {data.process.map((step, i) => (
                <ProcessStep key={step.step} step={step} index={i} total={data.process.length} />
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealContainer>

      </div>{/* End: SEO Content, Deep Content, Pricing, Process group */}

      {/* Group: FAQ, CTA, Related sections */}
      <ScrollRevealContainer>
        <div className="contents">

        {/* FAQ Section */}
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
          <div className="relative mx-auto max-w-3xl">
            <p className={`${srFade} text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4 text-center`}>
              {data.title} FAQ
            </p>
            <h2 className={`${sr} ${delays[1]} text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 text-center`}>
              Frequently Asked {data.title} Questions
              <span className="text-[#ff4500]">.</span>
            </h2>

            <div className="space-y-3">
              {(() => {
                const chunkSize = 4;
                const chunks: (typeof data.faqs)[] = [];
                for (let c = 0; c < data.faqs.length; c += chunkSize) {
                  chunks.push(data.faqs.slice(c, c + chunkSize));
                }
                return chunks.map((chunk, ci) => (
                  <div key={ci} className="space-y-3">
                    {chunk.map((faq, i) => (
                      <FAQItem key={ci * chunkSize + i} faq={faq} index={ci * chunkSize + i} />
                    ))}
                  </div>
                ));
              })()}
            </div>
          </div>
        </section>

        {/* Cinematic closing image */}
        {(() => {
          const closingImages = getImagesForService(data.slug, 8);
          const closingImg = closingImages[closingImages.length - 1];
          if (!closingImg) return null;
          return (
            <section className="relative w-full px-6 py-8 lg:px-12">
              <div className="relative mx-auto max-w-6xl">
                <div className={`${srScale} relative aspect-[21/9] overflow-hidden rounded-2xl border border-white/[0.06]`}>
                  <Image
                    src={closingImg.src}
                    alt={closingImg.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>
              </div>
            </section>
          );
        })()}

        {/* CTA Section */}
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px]" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className={`${sr} text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6`}>
              Ready to elevate your {data.title.toLowerCase()}
              <span className="text-[#ff4500]">?</span>
            </h2>
            <p className={`${sr} ${delays[1]} text-sm md:text-base text-white leading-relaxed mb-10 max-w-xl mx-auto`}>
              Let&apos;s discuss how our {data.title.toLowerCase()} services can help grow your business. Get a free consultation today.
            </p>
            <div className={`${sr} ${delays[2]} flex flex-col sm:flex-row items-center justify-center gap-4`}>
              <Link
                href="/contact/"
                className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
              >
                Book a Free Strategy Call
              </Link>
              <a
                href="mailto:info@townmedialabs.com"
                className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                info@townmedialabs.com
              </a>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedData.length > 0 && (
          <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
            <div className="relative mx-auto max-w-7xl">
              <h2 className={`${sr} text-2xl sm:text-3xl font-medium text-white mb-10`}>
                Services Related to {data.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedData.map((related, i) => (
                  <div key={related.slug} className={srDelay(i)}>
                    <Link
                      href={`/services/${related.slug}`}
                      className="group block p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#ff4500] transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-white leading-relaxed mb-4">{related.description}</p>
                      <span className="text-xs text-[#ff4500] font-medium tracking-wide group-hover:underline">
                        Learn More &rarr;
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Articles */}
        {(() => {
          const relatedBlogs = extras.relatedBlogs;
          if (relatedBlogs.length === 0) return null;
          return (
            <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
              <div className="relative mx-auto max-w-7xl">
                <p className={`${srFade} text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4`}>
                  From Our Blog
                </p>
                <h2 className={`${sr} ${delays[1]} text-2xl sm:text-3xl font-medium text-white mb-10`}>
                  {data.title} Insights &amp; Articles
                  <span className="text-[#ff4500]">.</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {relatedBlogs.map((blog, i) => (
                    <div key={blog.slug} className={srDelay(i)}>
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="group block p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 h-full"
                      >
                        <span className="inline-block text-[10px] tracking-wider uppercase bg-[#ff4500]/10 text-[#ff4500] rounded-full px-3 py-1 font-semibold mb-4">
                          {blog.category}
                        </span>
                        <h3 className="text-base font-semibold text-white mb-3 group-hover:text-[#ff4500] transition-colors leading-snug">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-white leading-relaxed mb-4 line-clamp-2">
                          {blog.metaDescription}
                        </p>
                        <span className="text-xs text-[#ff4500] font-medium tracking-wide group-hover:underline">
                          Read Article &rarr;
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* Related Industries */}
        {(() => {
          const relatedIndustryData = extras.relatedIndustries;
          if (relatedIndustryData.length === 0) return null;
          return (
            <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
              <div className="relative mx-auto max-w-7xl">
                <p className={`${srFade} text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4`}>
                  Industries We Serve
                </p>
                <h2 className={`${sr} ${delays[1]} text-2xl sm:text-3xl font-medium text-white mb-10`}>
                  {data.title} for Your Industry
                  <span className="text-[#ff4500]">.</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {relatedIndustryData.map((ind, i) => (
                    <div key={ind.slug} className={srDelay(i)}>
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="group block p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 h-full"
                      >
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#ff4500] transition-colors">
                          {ind.name}
                        </h3>
                        <p className="text-sm text-white leading-relaxed mb-4 line-clamp-3">
                          {ind.description}
                        </p>
                        <span className="text-xs text-[#ff4500] font-medium tracking-wide group-hover:underline">
                          View Industry &rarr;
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* Available In — Top City Links */}
        {(() => {
          const cityLinks = extras.cityLinks;
          if (cityLinks.length === 0) return null;
          return (
            <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
              <div className="relative mx-auto max-w-4xl text-center">
                <p className={`${srFade} text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4`}>
                  Available In
                </p>
                <h2 className={`${sr} ${delays[1]} text-2xl sm:text-3xl font-medium text-white mb-10`}>
                  {data.title} Services by City
                  <span className="text-[#ff4500]">.</span>
                </h2>
                <div className={`${sr} ${delays[2]} flex flex-wrap items-center justify-center gap-3`}>
                  {cityLinks.map((city) => (
                    <Link
                      key={city.slug}
                      href={city.href}
                      className="px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm text-white hover:text-[#ff4500] hover:border-[#ff4500]/30 hover:bg-[#ff4500]/5 transition-all duration-300"
                    >
                      {data.title} in {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        </div>{/* End: FAQ, CTA, Related group */}
      </ScrollRevealContainer>

      <FooterHome2 />
    </main>
  );
}
