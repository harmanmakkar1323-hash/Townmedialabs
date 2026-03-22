import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Panchkula | TML Agency",
  description: "TML offers expert video editing services in Panchkula. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing panchkula", "video editing agency panchkula", "video editing company panchkula"],
};

export default function VideoeditingInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
