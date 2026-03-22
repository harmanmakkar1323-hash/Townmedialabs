import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Minneapolis | TML Agency",
  description: "TML offers expert video editing services in Minneapolis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing minneapolis", "video editing agency minneapolis", "video editing company minneapolis"],
};

export default function VideoEditingInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
