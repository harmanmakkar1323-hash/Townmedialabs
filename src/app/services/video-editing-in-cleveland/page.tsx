import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Cleveland | TML Agency",
  description: "TML offers expert video editing services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing cleveland", "video editing agency cleveland", "video editing company cleveland"],
};

export default function VideoEditingInClevelandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
