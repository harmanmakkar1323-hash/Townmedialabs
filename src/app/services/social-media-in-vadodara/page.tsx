import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Vadodara | TML Agency",
  description: "TML offers expert social media marketing services in Vadodara. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing vadodara", "social media marketing agency vadodara", "social media marketing company vadodara"],
};

export default function SocialmediaInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
