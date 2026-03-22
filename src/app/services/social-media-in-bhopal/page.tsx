import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Bhopal | TML Agency",
  description: "TML offers expert social media marketing services in Bhopal. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing bhopal", "social media marketing agency bhopal", "social media marketing company bhopal"],
};

export default function SocialmediaInBhopalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
