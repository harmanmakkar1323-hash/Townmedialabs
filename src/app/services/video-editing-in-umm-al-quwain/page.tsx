import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert video editing services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing umm al quwain", "video editing agency umm al quwain", "video editing company umm al quwain"],
};

export default function VideoEditingInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
