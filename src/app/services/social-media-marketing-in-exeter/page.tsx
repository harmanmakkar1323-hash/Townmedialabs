import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Exeter | TML Agency",
  description: "TML offers expert social media marketing services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing exeter", "social media marketing agency exeter", "social media marketing company exeter"],
};

export default function SocialMediaInExeterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
