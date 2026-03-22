import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Noida | TML Agency",
  description: "TML offers expert video editing services in Noida. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing noida", "video editing agency noida", "video editing company noida"],
};

export default function VideoeditingInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
