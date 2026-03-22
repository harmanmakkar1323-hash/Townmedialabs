import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Vadodara | TML Agency",
  description: "TML offers expert video editing services in Vadodara. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing vadodara", "video editing agency vadodara", "video editing company vadodara"],
};

export default function VideoeditingInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
