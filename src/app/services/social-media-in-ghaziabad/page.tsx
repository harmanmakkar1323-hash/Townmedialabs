import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Ghaziabad | TML Agency",
  description: "TML offers expert social media marketing services in Ghaziabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing ghaziabad", "social media marketing agency ghaziabad", "social media marketing company ghaziabad"],
};

export default function SocialmediaInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
