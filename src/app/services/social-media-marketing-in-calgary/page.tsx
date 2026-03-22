import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Calgary | TML Agency",
  description: "TML offers expert social media marketing services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing calgary", "social media marketing agency calgary"],
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
