import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Oxford | TML Agency",
  description: "TML offers expert social media marketing services in Oxford. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing oxford", "social media marketing agency oxford", "social media marketing company oxford"],
};

export default function SocialMediaInOxfordPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
