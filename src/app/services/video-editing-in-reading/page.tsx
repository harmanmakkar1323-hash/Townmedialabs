import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Reading | TML Agency",
  description: "TML offers expert video editing services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing reading", "video editing agency reading", "video editing company reading"],
};

export default function VideoEditingInReadingPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
