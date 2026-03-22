import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Chennai | TML Agency",
  description: "TML offers expert video editing services in Chennai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing chennai", "video editing agency chennai", "video editing company chennai"],
};

export default function VideoeditingInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
