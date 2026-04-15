import Link from "next/link";
import type { IndustryPage } from "@/data/industries";
import Image from "next/image";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ScrollRevealContainer from "@/components/ui/ScrollRevealContainer";
import StatsSection from "@/components/ui/StatsSection";

// ── Sub-components ─────────────────────────────────────────────────────────────

function ChallengeCard({
  challenge,
  index,
}: {
  challenge: { title: string; description: string };
  index: number;
}) {
  return (
    <div
      className={`scroll-reveal scroll-delay-${index + 1} group relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500`}
    >
      <div className="absolute top-6 right-6 text-[10px] text-white font-mono">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff4500]/20 transition-colors">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff4500"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-white mb-3">{challenge.title}</h3>
      <p className="text-sm text-white leading-relaxed">{challenge.description}</p>
    </div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: { name: string; description: string; link: string };
  index: number;
}) {
  return (
    <div className={`scroll-reveal scroll-delay-${index + 1}`}>
      <Link
        href={service.link}
        className="group block h-full p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
      >
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#ff4500]/10 flex items-center justify-center group-hover:bg-[#ff4500]/20 transition-colors">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff4500]" />
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white group-hover:text-[#ff4500] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#ff4500] transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-white leading-relaxed">{service.description}</p>
      </Link>
    </div>
  );
}

function FAQItem({
  faq,
  index,
}: {
  faq: { question: string; answer: string };
  index: number;
}) {
  return (
    <details
      className={`scroll-reveal scroll-delay-${index + 1} group border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/[0.1] transition-colors`}
    >
      <summary
        className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none text-white font-medium text-sm md:text-base text-left"
      >
        <span className="pr-4">{faq.question}</span>
        <span
          className="text-white text-xl transition-transform duration-300 flex-shrink-0 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-white leading-relaxed border-t border-white/[0.04] pt-4">
        {faq.answer}
      </div>
    </details>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

interface RelatedBlog {
  slug: string;
  title: string;
  category: string;
  metaDescription: string;
}

interface PortfolioImg {
  src: string;
  alt: string;
}

export interface IndustryPageV2ClientProps {
  industry: IndustryPage;
  relatedBlogs: RelatedBlog[];
  portfolioImages: PortfolioImg[];
}

export default function IndustryPageV2Client({ industry, relatedBlogs, portfolioImages }: IndustryPageV2ClientProps) {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <InnerNavbar />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="hero-orange-gradient relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12 overflow-hidden">
        {/* Breadcrumbs */}
        <div className="relative z-10 max-w-5xl mx-auto mb-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: industry.name, href: `/industries/${industry.slug}` },
            ]}
          />
        </div>

        {/* Background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[#ff4500]/[0.04] blur-[160px] pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#ff4500]/[0.02] blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="hero-fade-up">
            <Link
              href="/industries/"
              className="inline-flex items-center gap-2 text-[11px] text-white tracking-[0.2em] uppercase hover:text-white transition-colors mb-8"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Industries
            </Link>
          </div>

          <p
            className="hero-fade-up hero-delay-1 text-[11px] text-white tracking-[0.25em] uppercase mb-6"
          >
            Industry Solutions
          </p>

          <h1
            className="hero-fade-up hero-delay-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6"
          >
            {(() => {
              const idx = industry.heroTitle.indexOf(industry.name);
              if (idx !== -1) {
                return (
                  <>
                    {industry.heroTitle.slice(0, idx)}
                    <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
                      {industry.name}
                    </span>
                    {industry.heroTitle.slice(idx + industry.name.length)}
                  </>
                );
              }
              return (
                <>
                  {"Digital Marketing for "}
                  <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
                    {industry.name}
                  </span>
                </>
              );
            })()}
            <span className="text-[#ff4500]">.</span>
          </h1>

          <p
            className="hero-fade-up hero-delay-3 text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {industry.heroSubtitle}
          </p>

          <div
            className="hero-fade-up hero-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact/"
              className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
            >
              Get a Free Strategy Call
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

      {/* ── Stats ─────────────────────────────────────────────────────────────── */}
      <StatsSection stats={industry.stats} />

      <ScrollRevealContainer>
        {/* ── Challenges ────────────────────────────────────────────────────────── */}
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-[#ff4500]/[0.02] blur-[120px] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl">
            <p
              className="scroll-reveal-fade text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
            >
              The Challenge
            </p>
            <h2
              className="scroll-reveal text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16"
            >
              What {industry.name} Businesses Face
              <span className="text-[#ff4500]">.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {industry.challenges.map((challenge, i) => (
                <ChallengeCard key={i} challenge={challenge} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────────────────────── */}
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
          <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-[#ff4500]/[0.02] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl">
            <p
              className="scroll-reveal-fade text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
            >
              Our Services
            </p>
            <h2
              className="scroll-reveal text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16"
            >
              Services for {industry.name}
              <span className="text-[#ff4500]">.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {industry.services.map((service, i) => (
                <ServiceCard key={i} service={service} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Portfolio Showcase ────────────────────────────────────────────────── */}
        <section className="relative w-full px-6 py-16 md:py-20 lg:px-12 overflow-hidden">
          <div className="relative mx-auto max-w-7xl">
            <h2
              className="scroll-reveal text-2xl sm:text-3xl font-medium text-white mb-10"
            >
              Our Work in {industry.name}<span className="text-[#ff4500]">.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {portfolioImages.map((img) => (
                <div key={img.src} className="relative aspect-square overflow-hidden rounded-xl border border-white/[0.06] group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deep Content ──────────────────────────────────────────────────────── */}
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
          <div className="relative mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-10">
              <p
                className="scroll-reveal-fade text-[10px] md:text-xs text-white tracking-[0.25em] uppercase font-semibold"
              >
                Industry Insights
              </p>
              <div
                className="scroll-reveal-scaleX flex-1 h-[1px] bg-white/[0.06] origin-left"
              />
            </div>

            <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl border border-white/[0.06] mb-8">
              <Image
                src="/work/web-design-finance-hero.webp"
                alt="Finance website hero design — investment platform with AI-generated imagery"
                fill
                sizes="100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>

            <div
              className="scroll-reveal prose-industry"
              dangerouslySetInnerHTML={{ __html: industry.content }}
            />
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
          <div className="relative mx-auto max-w-3xl">
            <p
              className="scroll-reveal-fade text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4 text-center"
            >
              FAQ
            </p>
            <h2
              className="scroll-reveal text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 text-center"
            >
              {industry.name} Marketing Questions
              <span className="text-[#ff4500]">.</span>
            </h2>

            <div className="space-y-3">
              {industry.faqItems.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────────── */}
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px]" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <h2
              className="scroll-reveal text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6"
            >
              Ready to grow your {industry.name.toLowerCase()} business
              <span className="text-[#ff4500]">?</span>
            </h2>
            <p
              className="scroll-reveal scroll-delay-1 text-sm md:text-base text-white leading-relaxed mb-10 max-w-xl mx-auto"
            >
              Let&apos;s discuss how our digital marketing expertise can help your{" "}
              {industry.name.toLowerCase()} business attract more clients, increase revenue,
              and dominate your market. Get a free consultation today.
            </p>
            <div
              className="scroll-reveal scroll-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
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

        {/* Related Reading */}
        {relatedBlogs.length > 0 && (
          <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
            <div className="relative mx-auto max-w-7xl">
              <p
                className="scroll-reveal-fade text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
              >
                From Our Blog
              </p>
              <h2
                className="scroll-reveal text-2xl sm:text-3xl font-medium text-white mb-10"
              >
                Related Reading
                <span className="text-[#ff4500]">.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedBlogs.map((blog, i) => (
                  <div
                    key={blog.slug}
                    className={`scroll-reveal scroll-delay-${i + 1}`}
                  >
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
        )}
      </ScrollRevealContainer>

      <FooterHome2 />
    </main>
  );
}
