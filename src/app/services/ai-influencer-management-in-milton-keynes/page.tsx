import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Milton Keynes | TML Agency",
  description: "TML offers expert ai influencer management services in Milton Keynes. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management milton keynes", "ai influencer management agency milton keynes", "ai influencer management company milton keynes"],
};

export default function AiInfluencerManagementInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
