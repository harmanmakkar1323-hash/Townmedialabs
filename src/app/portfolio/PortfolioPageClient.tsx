"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import { portfolioImages, categoryLabels, type PortfolioImage } from "@/data/portfolioImages";

const ease = [0.23, 1, 0.32, 1] as const;

// Client work (web design projects with descriptions)
const clientProjects = [
  {
    title: "CB Builders",
    category: "Web Design" as const,
    image: "/portfolio/cb-builders-web-design.webp",
    description: "A clean, responsive construction company website with lead generation forms and project galleries.",
  },
  {
    title: "Real Estate App",
    category: "UI/UX Design" as const,
    image: "/portfolio/real-estate-app-uiux-design.webp",
    description: "Mobile-first real estate platform with property listings, virtual tours, and agent matching.",
  },
  {
    title: "BYT Trucking",
    category: "Web Design" as const,
    image: "/portfolio/byt-trucking-web-design.webp",
    description: "Full-service trucking company website with quote calculator, fleet showcase, and route tracking.",
  },
  {
    title: "NFT Marketplace",
    category: "Web Design" as const,
    image: "/portfolio/nft-marketplace-web-design.jpg",
    description: "A blockchain-powered marketplace for digital art collectors with wallet integration and auctions.",
  },
  {
    title: "Smart Home App",
    category: "UI/UX Design" as const,
    image: "/portfolio/smart-home-app-uiux-design.webp",
    description: "IoT dashboard for controlling home devices, energy usage tracking, and automation scheduling.",
  },
  {
    title: "Win Asset Finance",
    category: "Web Design" as const,
    image: "/portfolio/win-asset-finance-web-design.png",
    description: "Financial services website with loan calculators, application forms, and compliance-ready design.",
  },
  {
    title: "Custom Trucking & Baling",
    category: "Branding & Web" as const,
    image: "/portfolio/custom-trucking-baling-branding.jpg",
    description: "Complete rebrand and website for an agricultural services company, from logo to launch.",
  },
  {
    title: "Zuri Beauty Academy",
    category: "Web Design" as const,
    image: "/portfolio/zuri-beauty-academy-web-design.png",
    description: "Beauty school website with course catalog, online enrollment, and student portal.",
  },
  {
    title: "Virtual Healthcare",
    category: "Branding & Web" as const,
    image: "/portfolio/virtual-healthcare-branding.webp",
    description: "Telemedicine platform brand identity and landing pages designed to build patient trust.",
  },
  {
    title: "Advertisement Marketing",
    category: "Web Design" as const,
    image: "/portfolio/advertisement-marketing-web-design.png",
    description: "Performance marketing agency site with case study showcases and campaign result dashboards.",
  },
];

// Build unique categories from work images
const workCategories = ["All", ...Object.values(categoryLabels)];
const clientCategories = ["All", ...Array.from(new Set(clientProjects.map((p) => p.category)))];

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof clientProjects)[number];
  delay: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  useSpring(mouseX, { stiffness: 300, damping: 30 });
  useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 60px -12px rgba(255, 69, 0, 0.15)",
        transition: { duration: 0.4, ease },
      }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-xl bg-[#111] cursor-pointer border border-white/[0.04] hover:border-[#ff4500]/20 transition-colors duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} - ${project.category} project by TML Agency`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#ff4500]" />
          <span className="text-[11px] uppercase tracking-[0.15em] text-[#ff4500] font-medium">
            {project.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-white leading-relaxed">{project.description}</p>
      </div>
    </motion.div>
  );
}

function WorkImageCard({
  image,
  delay,
}: {
  image: PortfolioImage;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.4, ease },
      }}
      className="group relative overflow-hidden rounded-xl bg-[#111] border border-white/[0.04] hover:border-[#ff4500]/20 transition-colors duration-500"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="inline-block text-[10px] uppercase tracking-[0.15em] bg-[#ff4500]/90 text-white rounded-full px-3 py-1 font-medium">
            {categoryLabels[image.category]}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioPageClient() {
  const [activeClientCategory, setActiveClientCategory] = useState("All");
  const [activeWorkCategory, setActiveWorkCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredClients =
    activeClientCategory === "All"
      ? clientProjects
      : clientProjects.filter((p) => p.category === activeClientCategory);

  const filteredWork =
    activeWorkCategory === "All"
      ? portfolioImages
      : portfolioImages.filter(
          (img) => categoryLabels[img.category] === activeWorkCategory
        );

  // Show 24 initially, all on "Load More"
  const visibleWork = showAll ? filteredWork : filteredWork.slice(0, 24);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <InnerNavbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-[#ff4500] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Projects That Speak
            <br />
            <span className="text-white">for Themselves</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-white text-lg max-w-2xl mx-auto"
          >
            From startups to established brands, we craft digital experiences that
            drive real business results. Here&apos;s a look at what we&apos;ve built.
          </motion.p>
        </div>
      </section>

      {/* Client Projects Section */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Client Projects<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {clientCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveClientCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeClientCategory === cat
                    ? "bg-[#ff4500] border-[#ff4500] text-white"
                    : "bg-white/5 border-white/10 text-white hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={i * 0.08} />
            ))}
          </div>
          {filteredClients.length === 0 && (
            <p className="text-center text-white py-12 text-lg">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Video Showreel */}
      <section className="px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Showreel</h2>
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
              poster="/tml-showreel-poster.jpg"
            >
              <source src="/tml-showreel.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Creative Work Gallery */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#ff4500] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Creative Portfolio
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Creative Work<span className="text-[#ff4500]">.</span>
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Graphic design, product photography, packaging, social media campaigns, creative ads, and more — all crafted by our in-house team.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {workCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveWorkCategory(cat); setShowAll(false); }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeWorkCategory === cat
                    ? "bg-[#ff4500] border-[#ff4500] text-white"
                    : "bg-white/5 border-white/10 text-white hover:text-white hover:border-white/20"
                }`}
              >
                {cat} {cat !== "All" && (
                  <span className="ml-1 text-xs opacity-60">
                    ({portfolioImages.filter((img) => categoryLabels[img.category] === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visibleWork.map((image, i) => (
              <WorkImageCard
                key={image.src}
                image={image}
                delay={Math.min(i * 0.03, 0.3)}
              />
            ))}
          </div>

          {/* Load More */}
          {!showAll && filteredWork.length > 24 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 rounded-full border border-[#ff4500]/30 text-[#ff4500] font-medium hover:bg-[#ff4500]/10 transition-all duration-300"
              >
                Show All {filteredWork.length} Images
              </button>
            </div>
          )}

          {filteredWork.length === 0 && (
            <p className="text-center text-white py-12 text-lg">
              No work in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#ff4500]/10 to-transparent border border-[#ff4500]/20 rounded-2xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-white mb-8 max-w-xl mx-auto">
            We&apos;d love to hear about it. Whether it&apos;s a brand refresh, a new website,
            or a full-scale digital campaign, let&apos;s make it happen.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold hover:bg-[#ff5722] transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
