import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Luton | TML Agency",
  description: "TML offers expert social media marketing services in Luton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing luton", "social media marketing agency luton", "social media marketing company luton"],
};

export default function SocialMediaInLutonUkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
