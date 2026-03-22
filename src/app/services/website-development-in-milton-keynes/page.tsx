import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Milton Keynes | TML Agency",
  description: "TML offers expert website development services in Milton Keynes. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development milton keynes", "website development agency milton keynes", "website development company milton keynes"],
};

export default function WebsiteDevelopmentInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
