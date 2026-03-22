import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Aberdeen | TML Agency",
  description: "TML offers expert social media marketing services in Aberdeen. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing aberdeen", "social media marketing agency aberdeen", "social media marketing company aberdeen"],
};

export default function SocialMediaInAberdeenPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
