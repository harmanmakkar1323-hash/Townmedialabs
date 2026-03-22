import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Milton Keynes | TML Agency",
  description: "TML offers expert video editing services in Milton Keynes. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["video editing milton keynes", "video editing agency milton keynes", "video editing company milton keynes"],
};

export default function VideoEditingInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
