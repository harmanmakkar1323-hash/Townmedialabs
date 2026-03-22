import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Swansea | TML Agency",
  description: "TML offers expert social media marketing services in Swansea. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing swansea", "social media marketing agency swansea", "social media marketing company swansea"],
};

export default function SocialMediaInSwanseaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
