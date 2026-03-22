import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Bhopal | TML Agency",
  description: "TML offers expert video editing services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing bhopal", "video editing agency bhopal", "video editing company bhopal"],
};

export default function VideoeditingInBhopalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
