import type { Metadata } from "next";
import Link from "next/link";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { authors } from "@/data/authors";

const siteUrl = "https://townmedialabs.com";

export const metadata: Metadata = {
  title: "Authors & Contributors",
  description:
    "Meet the team behind TML Agency — SEO experts, brand strategists, designers, and marketers with decades of combined experience helping 500+ brands grow.",
  alternates: { canonical: "/authors/" },
  openGraph: {
    title: "Authors & Contributors",
    description:
      "Meet the team behind TML Agency — SEO experts, brand strategists, designers, and marketers with decades of combined experience helping 500+ brands grow.",
    url: `${siteUrl}/authors/`,
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
  },
};

export default function AuthorsIndexPage() {
  const authorList = Object.values(authors);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <InnerNavbar />

      <section className="hero-orange-gradient relative px-6 pt-32 pb-12 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Authors", href: "/authors/" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Authors & Contributors
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Meet the team behind TML Agency. Our authors bring decades of
              combined experience in SEO, branding, performance marketing,
              design, and web development. Every article on this site is written
              by a named expert with verifiable credentials.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {authorList.map((author) => (
            <Link
              key={author.id}
              href={`/authors/${author.id}/`}
              className="group block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30 hover:bg-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-lg font-bold text-white">
                  {author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-semibold text-white group-hover:text-orange-400">
                    {author.name}
                  </h2>
                  <p className="text-sm text-white/60">{author.title}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-white/70 line-clamp-3">
                {author.bio}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {author.expertise.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-xs text-white/50">
                {author.yearsOfExperience}+ years experience
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
