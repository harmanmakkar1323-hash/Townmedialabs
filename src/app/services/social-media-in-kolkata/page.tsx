import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Kolkata | TML Agency",
  description: "TML offers expert social media marketing services in Kolkata. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing kolkata", "social media marketing agency kolkata", "social media marketing company kolkata"],
};

export default function SocialmediaInKolkataPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
