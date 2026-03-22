import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Lucknow | TML Agency",
  description: "TML offers expert social media marketing services in Lucknow. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing lucknow", "social media marketing agency lucknow", "social media marketing company lucknow"],
};

export default function SocialmediaInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
