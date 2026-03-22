import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Swansea | TML Agency",
  description: "TML offers expert video editing services in Swansea. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing swansea", "video editing agency swansea", "video editing company swansea"],
};

export default function VideoEditingInSwanseaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
