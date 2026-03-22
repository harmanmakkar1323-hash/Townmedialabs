import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Amritsar | TML Agency",
  description: "TML offers expert video editing services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing amritsar", "video editing agency amritsar", "video editing company amritsar"],
};

export default function VideoeditingInAmritsarPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
