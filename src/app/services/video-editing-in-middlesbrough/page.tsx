import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Middlesbrough | TML Agency",
  description: "TML offers expert video editing services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing middlesbrough", "video editing agency middlesbrough", "video editing company middlesbrough"],
};

export default function VideoEditingInMiddlesbroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
