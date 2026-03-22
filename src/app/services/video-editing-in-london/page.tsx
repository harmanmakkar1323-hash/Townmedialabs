import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in London | TML Agency",
  description: "TML offers expert video editing services in London. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing london", "video editing agency london", "video editing company london"],
};

export default function VideoEditingInLondonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
