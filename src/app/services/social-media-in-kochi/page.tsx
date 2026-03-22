import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Kochi | TML Agency",
  description: "TML offers expert social media marketing services in Kochi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing kochi", "social media marketing agency kochi", "social media marketing company kochi"],
};

export default function SocialmediaInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
