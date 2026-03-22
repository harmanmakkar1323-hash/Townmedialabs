import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Karnal | TML Agency",
  description: "TML offers expert social media marketing services in Karnal. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing karnal", "social media marketing agency karnal", "social media marketing company karnal"],
};

export default function SocialmediaInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
