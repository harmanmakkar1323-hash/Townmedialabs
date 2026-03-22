import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Noida | TML Agency",
  description: "TML offers expert social media marketing services in Noida. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing noida", "social media marketing agency noida", "social media marketing company noida"],
};

export default function SocialmediaInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
