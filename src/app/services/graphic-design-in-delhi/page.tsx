import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Delhi | TML Agency",
  description: "TML offers expert graphic design services in Delhi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design delhi", "graphic design agency delhi", "graphic design company delhi"],
};

export default function GraphicDesignInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
