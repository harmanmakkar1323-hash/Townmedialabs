import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Cardiff | TML Agency",
  description: "TML offers expert social media marketing services in Cardiff. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing cardiff", "social media marketing agency cardiff", "social media marketing company cardiff"],
};

export default function SocialMediaInCardiffPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
