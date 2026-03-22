import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Services | TML Agency — Full-Service Digital Marketing",
  description:
    "Explore TML Agency's full range of digital marketing services — Branding, SEO, Google Ads, Social Media, Web Development, AI Influencer Management, Lead Generation, and more.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
