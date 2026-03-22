import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in York | TML Agency",
  description: "TML offers expert video editing services in York. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing york", "video editing agency york", "video editing company york"],
};

export default function VideoEditingInYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
