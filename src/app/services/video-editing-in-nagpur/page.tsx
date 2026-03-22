import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Nagpur | TML Agency",
  description: "TML offers expert video editing services in Nagpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing nagpur", "video editing agency nagpur", "video editing company nagpur"],
};

export default function VideoeditingInNagpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
