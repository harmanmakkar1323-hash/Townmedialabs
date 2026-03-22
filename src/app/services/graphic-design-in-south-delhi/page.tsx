import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in South Delhi | TML Agency",
  description: "TML offers expert graphic design services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design south delhi", "graphic design agency south delhi", "graphic design company south delhi"],
};

export default function GraphicdesignInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
