import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Adelaide | TML Agency",
  description: "TML offers expert social media marketing services in Adelaide. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing adelaide", "social media marketing agency adelaide", "social media marketing company adelaide"],
};

export default function SocialMediaInAdelaidePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
