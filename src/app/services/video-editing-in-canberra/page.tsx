import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Canberra | TML Agency",
  description: "TML offers expert video editing services in Canberra. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing canberra", "video editing agency canberra", "video editing company canberra"],
};

export default function VideoEditingInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
