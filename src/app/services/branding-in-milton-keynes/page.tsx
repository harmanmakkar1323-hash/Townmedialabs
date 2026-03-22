import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Milton Keynes | TML Agency",
  description: "TML offers expert branding services in Milton Keynes. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding milton keynes", "branding agency milton keynes", "branding company milton keynes"],
};

export default function BrandingInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
