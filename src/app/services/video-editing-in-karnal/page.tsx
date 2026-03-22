import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Karnal | TML Agency",
  description: "TML offers expert video editing services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing karnal", "video editing agency karnal", "video editing company karnal"],
};

export default function VideoeditingInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
