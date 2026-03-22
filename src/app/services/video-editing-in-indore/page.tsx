import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Indore | TML Agency",
  description: "TML offers expert video editing services in Indore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing indore", "video editing agency indore", "video editing company indore"],
};

export default function VideoeditingInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
