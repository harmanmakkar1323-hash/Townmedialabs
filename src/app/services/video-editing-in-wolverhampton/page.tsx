import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Wolverhampton | TML Agency",
  description: "TML offers expert video editing services in Wolverhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing wolverhampton", "video editing agency wolverhampton", "video editing company wolverhampton"],
};

export default function VideoEditingInWolverhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
