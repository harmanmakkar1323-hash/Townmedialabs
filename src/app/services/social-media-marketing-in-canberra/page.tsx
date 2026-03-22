import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Canberra | TML Agency",
  description: "TML offers expert social media marketing services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing canberra", "social media marketing agency canberra", "social media marketing company canberra"],
};

export default function SocialMediaInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
