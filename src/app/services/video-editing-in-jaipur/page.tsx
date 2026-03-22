import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Jaipur | TML Agency",
  description: "TML offers expert video editing services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing jaipur", "video editing agency jaipur", "video editing company jaipur"],
};

export default function VideoeditingInJaipurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
