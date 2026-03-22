import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Cheltenham | TML Agency",
  description: "TML offers expert video editing services in Cheltenham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing cheltenham", "video editing agency cheltenham", "video editing company cheltenham"],
};

export default function VideoEditingInCheltenhamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
