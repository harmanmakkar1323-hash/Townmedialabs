import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Lucknow | TML Agency",
  description: "TML offers expert video editing services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing lucknow", "video editing agency lucknow", "video editing company lucknow"],
};

export default function VideoeditingInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
