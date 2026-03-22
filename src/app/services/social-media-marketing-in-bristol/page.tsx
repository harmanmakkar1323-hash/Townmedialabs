import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Bristol | TML Agency",
  description: "TML offers expert social media marketing services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing bristol", "social media marketing agency bristol", "social media marketing company bristol"],
};

export default function SocialMediaInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
