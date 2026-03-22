import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Milton Keynes | TML Agency",
  description: "TML offers expert music release services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release milton keynes", "music release agency milton keynes", "music release company milton keynes"],
};

export default function MusicReleaseInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
