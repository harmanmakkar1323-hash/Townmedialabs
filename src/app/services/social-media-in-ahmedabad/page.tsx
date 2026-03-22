import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Ahmedabad | TML Agency",
  description: "TML offers expert social media marketing services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing ahmedabad", "social media marketing agency ahmedabad", "social media marketing company ahmedabad"],
};

export default function SocialmediaInAhmedabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
