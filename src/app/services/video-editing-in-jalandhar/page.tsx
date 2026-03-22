import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Jalandhar | TML Agency",
  description: "TML offers expert video editing services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing jalandhar", "video editing agency jalandhar", "video editing company jalandhar"],
};

export default function VideoeditingInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
