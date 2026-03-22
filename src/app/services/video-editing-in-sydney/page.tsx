import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Sydney | TML Agency",
  description: "TML offers expert video editing services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing sydney", "video editing agency sydney", "video editing company sydney"],
};

export default function VideoEditingInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
