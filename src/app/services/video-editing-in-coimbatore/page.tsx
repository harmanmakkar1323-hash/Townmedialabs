import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Coimbatore | TML Agency",
  description: "TML offers expert video editing services in Coimbatore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing coimbatore", "video editing agency coimbatore", "video editing company coimbatore"],
};

export default function VideoeditingInCoimbatorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
