import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Kharar | TML Agency",
  description: "TML offers expert social media marketing services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing kharar", "social media marketing agency kharar", "social media marketing company kharar"],
};

export default function SocialmediaInKhararPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
