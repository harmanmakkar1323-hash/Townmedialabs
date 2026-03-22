import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Luton | TML Agency",
  description: "TML offers expert video editing services in Luton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing luton", "video editing agency luton", "video editing company luton"],
};

export default function VideoEditingInLutonUkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
