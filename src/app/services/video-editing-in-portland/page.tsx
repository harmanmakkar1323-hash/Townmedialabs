import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["portland"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Portland | TML Agency",
  description: "TML offers expert video editing services in Portland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing portland", "video editing agency portland", "video editing company portland"],
};

export default function VideoEditingInPortlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
