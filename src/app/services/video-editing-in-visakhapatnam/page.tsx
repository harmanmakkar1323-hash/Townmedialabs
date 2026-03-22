import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert video editing services in Visakhapatnam. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing visakhapatnam", "video editing agency visakhapatnam", "video editing company visakhapatnam"],
};

export default function VideoeditingInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
