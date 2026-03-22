import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Dehradun | TML Agency",
  description: "TML offers expert video editing services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing dehradun", "video editing agency dehradun", "video editing company dehradun"],
};

export default function VideoeditingInDehradunPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
