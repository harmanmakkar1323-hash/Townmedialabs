import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Pune | TML Agency",
  description: "TML offers expert social media marketing services in Pune. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing pune", "social media marketing agency pune", "social media marketing company pune"],
};

export default function SocialmediaInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
