import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Rajkot | TML Agency",
  description: "TML offers expert video editing services in Rajkot. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing rajkot", "video editing agency rajkot", "video editing company rajkot"],
};

export default function VideoeditingInRajkotPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
