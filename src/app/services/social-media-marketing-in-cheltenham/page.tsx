import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Cheltenham | TML Agency",
  description: "TML offers expert social media marketing services in Cheltenham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing cheltenham", "social media marketing agency cheltenham", "social media marketing company cheltenham"],
};

export default function SocialMediaInCheltenhamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
