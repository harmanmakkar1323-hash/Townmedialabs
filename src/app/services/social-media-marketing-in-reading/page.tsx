import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Reading | TML Agency",
  description: "TML offers expert social media marketing services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing reading", "social media marketing agency reading", "social media marketing company reading"],
};

export default function SocialMediaInReadingPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
