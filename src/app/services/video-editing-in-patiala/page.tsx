import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Patiala | TML Agency",
  description: "TML offers expert video editing services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing patiala", "video editing agency patiala", "video editing company patiala"],
};

export default function VideoeditingInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
