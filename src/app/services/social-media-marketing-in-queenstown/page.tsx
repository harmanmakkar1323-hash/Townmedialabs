import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["queenstown"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Queenstown | TML Agency",
  description: "TML offers expert social media marketing services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing queenstown", "social media marketing agency queenstown", "social media marketing queenstown nz"],
};

export default function SocialMediaMarketingInQueenstownPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
