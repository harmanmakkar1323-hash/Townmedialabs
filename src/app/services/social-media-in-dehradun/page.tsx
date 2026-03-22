import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Dehradun | TML Agency",
  description: "TML offers expert social media marketing services in Dehradun. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing dehradun", "social media marketing agency dehradun", "social media marketing company dehradun"],
};

export default function SocialmediaInDehradunPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
