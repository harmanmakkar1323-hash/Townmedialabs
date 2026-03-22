import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Kolkata | TML Agency",
  description: "TML offers expert video editing services in Kolkata. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing kolkata", "video editing agency kolkata", "video editing company kolkata"],
};

export default function VideoeditingInKolkataPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
