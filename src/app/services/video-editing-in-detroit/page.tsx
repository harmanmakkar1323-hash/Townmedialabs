import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Detroit | TML Agency",
  description: "TML offers expert video editing services in Detroit. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing detroit", "video editing agency detroit", "video editing company detroit"],
};

export default function VideoEditingInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
