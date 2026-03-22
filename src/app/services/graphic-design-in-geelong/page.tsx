import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Geelong | TML Agency",
  description: "TML offers expert graphic design services in Geelong. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design geelong", "graphic design agency geelong", "graphic design company geelong"],
};

export default function GraphicDesignInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
