import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["norwich"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Norwich | TML Agency",
  description: "TML offers expert social media marketing services in Norwich. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing norwich", "social media marketing agency norwich", "social media marketing company norwich"],
};

export default function SocialMediaInNorwichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
