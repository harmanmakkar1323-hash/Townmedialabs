import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Pune | TML Agency",
  description: "TML offers expert video editing services in Pune. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing pune", "video editing agency pune", "video editing company pune"],
};

export default function VideoeditingInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
