import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Derabassi | TML Agency",
  description: "TML offers expert video editing services in Derabassi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing derabassi", "video editing agency derabassi", "video editing company derabassi"],
};

export default function VideoeditingInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
