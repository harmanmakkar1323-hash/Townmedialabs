import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Honolulu | TML Agency",
  description: "TML offers expert graphic design services in Honolulu. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design honolulu", "graphic design agency honolulu", "graphic design company honolulu"],
};

export default function GraphicDesignInHonoluluPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
