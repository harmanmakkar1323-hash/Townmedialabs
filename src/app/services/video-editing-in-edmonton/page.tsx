import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edmonton"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Edmonton | TML Agency",
  description: "TML offers expert video editing services in Edmonton, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing edmonton", "video editing agency edmonton"],
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
