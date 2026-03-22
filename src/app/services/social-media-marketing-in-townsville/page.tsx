import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Townsville | TML Agency",
  description: "TML offers expert social media marketing services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing townsville", "social media marketing agency townsville", "social media marketing company townsville"],
};

export default function SocialMediaInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
