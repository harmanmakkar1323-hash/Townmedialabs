import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Faridabad | TML Agency",
  description: "TML offers expert video editing services in Faridabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing faridabad", "video editing agency faridabad", "video editing company faridabad"],
};

export default function VideoeditingInFaridabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
