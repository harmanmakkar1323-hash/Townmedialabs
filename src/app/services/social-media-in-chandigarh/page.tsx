import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chandigarh"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Chandigarh | TML Agency",
  description: "TML offers expert social media marketing services in Chandigarh. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing chandigarh", "social media marketing agency chandigarh", "social media marketing company chandigarh"],
};

export default function SocialmediaInChandigarhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
