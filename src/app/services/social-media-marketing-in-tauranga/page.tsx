import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Tauranga | TML Agency",
  description: "TML offers expert social media marketing services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing tauranga", "social media marketing agency tauranga", "social media marketing tauranga nz"],
};

export default function SocialMediaMarketingInTaurangaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
