import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Rajkot | TML Agency",
  description: "TML offers expert social media marketing services in Rajkot. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing rajkot", "social media marketing agency rajkot", "social media marketing company rajkot"],
};

export default function SocialmediaInRajkotPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
