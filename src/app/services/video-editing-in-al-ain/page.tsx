import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Al Ain | TML Agency",
  description: "TML offers expert video editing services in Al Ain. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing al ain", "video editing agency al ain", "video editing company al ain"],
};

export default function VideoEditingInAlAinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
