import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Kharar | TML Agency",
  description: "TML offers expert graphic design services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design kharar", "graphic design agency kharar", "graphic design company kharar"],
};

export default function GraphicdesignInKhararPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
