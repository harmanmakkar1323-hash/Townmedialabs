import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Kochi | TML Agency",
  description: "TML offers expert video editing services in Kochi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing kochi", "video editing agency kochi", "video editing company kochi"],
};

export default function VideoeditingInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
