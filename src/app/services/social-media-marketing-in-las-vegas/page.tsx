import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Las Vegas | TML Agency",
  description: "TML offers expert social media marketing services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing las vegas", "social media marketing agency las vegas", "social media marketing company las vegas"],
};

export default function SocialMediaInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
