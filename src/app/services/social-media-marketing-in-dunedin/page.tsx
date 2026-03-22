import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dunedin"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Dunedin | TML Agency",
  description: "TML offers expert social media marketing services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing dunedin", "social media marketing agency dunedin", "social media marketing dunedin nz"],
};

export default function SocialMediaMarketingInDunedinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
