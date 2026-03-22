import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Perth | TML Agency",
  description: "TML offers expert social media marketing services in Perth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing perth", "social media marketing agency perth", "social media marketing company perth"],
};

export default function SocialMediaInPerthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
