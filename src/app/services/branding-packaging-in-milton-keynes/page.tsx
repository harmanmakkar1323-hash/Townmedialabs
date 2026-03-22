import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Milton Keynes | TML Agency",
  description: "TML offers expert packaging design services in Milton Keynes. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design milton keynes", "packaging design agency milton keynes", "packaging design company milton keynes"],
};

export default function BrandingPackagingInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
