import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Manchester | TML Agency",
  description: "TML offers expert social media marketing services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing manchester", "social media marketing agency manchester", "social media marketing company manchester"],
};

export default function SocialMediaInManchesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
