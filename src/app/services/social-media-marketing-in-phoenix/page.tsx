import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Phoenix | TML Agency",
  description: "TML offers expert social media marketing services in Phoenix. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing phoenix", "social media marketing agency phoenix", "social media marketing company phoenix"],
};

export default function SocialMediaInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
