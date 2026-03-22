import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Preston | TML Agency",
  description: "TML offers expert video editing services in Preston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing preston", "video editing agency preston", "video editing company preston"],
};

export default function VideoEditingInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
