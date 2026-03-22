import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Nagpur | TML Agency",
  description: "TML offers expert social media marketing services in Nagpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing nagpur", "social media marketing agency nagpur", "social media marketing company nagpur"],
};

export default function SocialmediaInNagpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
