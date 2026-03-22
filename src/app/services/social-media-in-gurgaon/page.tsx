import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Gurgaon | TML Agency",
  description: "TML offers expert social media marketing services in Gurgaon. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing gurgaon", "social media marketing agency gurgaon", "social media marketing company gurgaon"],
};

export default function SocialmediaInGurgaonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
