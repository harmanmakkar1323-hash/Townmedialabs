import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Hamilton | TML Agency",
  description: "TML offers expert social media marketing services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing hamilton", "social media marketing agency hamilton", "social media marketing hamilton nz"],
};

export default function SocialMediaMarketingInHamiltonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
