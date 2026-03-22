import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Hyderabad | TML Agency",
  description: "TML offers expert video editing services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing hyderabad", "video editing agency hyderabad", "video editing company hyderabad"],
};

export default function VideoeditingInHyderabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
