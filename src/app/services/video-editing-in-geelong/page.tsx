import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Geelong | TML Agency",
  description: "TML offers expert video editing services in Geelong. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing geelong", "video editing agency geelong", "video editing company geelong"],
};

export default function VideoEditingInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
