import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Bristol | TML Agency",
  description: "TML offers expert video editing services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing bristol", "video editing agency bristol", "video editing company bristol"],
};

export default function VideoEditingInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
