import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["orlando"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Orlando | TML Agency",
  description: "TML offers expert video editing services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing orlando", "video editing agency orlando", "video editing company orlando"],
};

export default function VideoEditingInOrlandoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
