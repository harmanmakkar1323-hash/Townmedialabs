import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Panipat | TML Agency",
  description: "TML offers expert video editing services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing panipat", "video editing agency panipat", "video editing company panipat"],
};

export default function VideoeditingInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
