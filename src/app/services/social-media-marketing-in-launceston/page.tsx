import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Launceston | TML Agency",
  description: "TML offers expert social media marketing services in Launceston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing launceston", "social media marketing agency launceston", "social media marketing company launceston"],
};

export default function SocialMediaInLauncestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
