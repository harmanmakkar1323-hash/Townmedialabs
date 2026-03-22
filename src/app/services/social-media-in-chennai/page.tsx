import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Chennai | TML Agency",
  description: "TML offers expert social media marketing services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing chennai", "social media marketing agency chennai", "social media marketing company chennai"],
};

export default function SocialmediaInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
