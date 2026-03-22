import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Indianapolis | TML Agency",
  description: "TML offers expert social media marketing services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing indianapolis", "social media marketing agency indianapolis", "social media marketing company indianapolis"],
};

export default function SocialMediaInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
