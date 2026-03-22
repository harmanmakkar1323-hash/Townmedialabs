import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Panipat | TML Agency",
  description: "TML offers expert social media marketing services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing panipat", "social media marketing agency panipat", "social media marketing company panipat"],
};

export default function SocialmediaInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
