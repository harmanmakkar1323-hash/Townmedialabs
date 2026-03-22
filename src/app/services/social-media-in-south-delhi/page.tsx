import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in South Delhi | TML Agency",
  description: "TML offers expert social media marketing services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing south delhi", "social media marketing agency south delhi", "social media marketing company south delhi"],
};

export default function SocialmediaInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
