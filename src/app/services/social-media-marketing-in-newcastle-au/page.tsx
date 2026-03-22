import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["newcastle_au"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Newcastle | TML Agency",
  description: "TML offers expert social media marketing services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing newcastle", "social media marketing agency newcastle", "social media marketing company newcastle"],
};

export default function SocialMediaInNewcastleAuPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
