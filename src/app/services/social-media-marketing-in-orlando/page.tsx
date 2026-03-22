import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["orlando"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Orlando | TML Agency",
  description: "TML offers expert social media marketing services in Orlando. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing orlando", "social media marketing agency orlando", "social media marketing company orlando"],
};

export default function SocialMediaInOrlandoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
