import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Mohali | TML Agency",
  description: "TML offers expert social media marketing services in Mohali. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing mohali", "social media marketing agency mohali", "social media marketing company mohali"],
};

export default function SocialmediaInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
