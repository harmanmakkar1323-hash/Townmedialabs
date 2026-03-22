import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Milton Keynes | TML Agency",
  description: "TML offers expert social media marketing services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing milton keynes", "social media marketing agency milton keynes", "social media marketing company milton keynes"],
};

export default function SocialMediaInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
