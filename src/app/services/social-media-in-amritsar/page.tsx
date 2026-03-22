import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Amritsar | TML Agency",
  description: "TML offers expert social media marketing services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing amritsar", "social media marketing agency amritsar", "social media marketing company amritsar"],
};

export default function SocialmediaInAmritsarPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
