import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Bendigo | TML Agency",
  description: "TML offers expert social media marketing services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing bendigo", "social media marketing agency bendigo", "social media marketing company bendigo"],
};

export default function SocialMediaInBendigoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
