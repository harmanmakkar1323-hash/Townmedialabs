import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Milton Keynes | TML Agency",
  description: "TML offers expert graphic design services in Milton Keynes. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design milton keynes", "graphic design agency milton keynes", "graphic design company milton keynes"],
};

export default function GraphicDesignInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
