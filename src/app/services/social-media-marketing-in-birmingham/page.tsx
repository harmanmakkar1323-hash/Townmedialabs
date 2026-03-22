import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Birmingham | TML Agency",
  description: "TML offers expert social media marketing services in Birmingham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing birmingham", "social media marketing agency birmingham", "social media marketing company birmingham"],
};

export default function SocialMediaInBirminghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
