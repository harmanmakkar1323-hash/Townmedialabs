import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Sacramento | TML Agency",
  description: "TML offers expert video editing services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing sacramento", "video editing agency sacramento", "video editing company sacramento"],
};

export default function VideoEditingInSacramentoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
