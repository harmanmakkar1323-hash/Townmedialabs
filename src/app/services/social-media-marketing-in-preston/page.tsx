import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Preston | TML Agency",
  description: "TML offers expert social media marketing services in Preston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing preston", "social media marketing agency preston", "social media marketing company preston"],
};

export default function SocialMediaInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
