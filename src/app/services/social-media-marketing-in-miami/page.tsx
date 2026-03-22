import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Miami | TML Agency",
  description: "TML offers expert social media marketing services in Miami. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing miami", "social media marketing agency miami", "social media marketing company miami"],
};

export default function SocialMediaInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
