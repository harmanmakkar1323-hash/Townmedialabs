import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert social media marketing services in Stoke-on-Trent. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing stoke-on-trent", "social media marketing agency stoke-on-trent", "social media marketing company stoke-on-trent"],
};

export default function SocialMediaInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
