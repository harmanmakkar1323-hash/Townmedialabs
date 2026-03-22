import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Fort Worth | TML Agency",
  description: "TML offers expert video editing services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing fort worth", "video editing agency fort worth", "video editing company fort worth"],
};

export default function VideoEditingInFortWorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
