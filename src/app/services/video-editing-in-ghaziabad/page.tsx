import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Ghaziabad | TML Agency",
  description: "TML offers expert video editing services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing ghaziabad", "video editing agency ghaziabad", "video editing company ghaziabad"],
};

export default function VideoeditingInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
