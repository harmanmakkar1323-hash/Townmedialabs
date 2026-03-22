import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in York | TML Agency",
  description: "TML offers expert social media marketing services in York. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing york", "social media marketing agency york", "social media marketing company york"],
};

export default function SocialMediaInYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
