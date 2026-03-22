import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Surat | TML Agency",
  description: "TML offers expert graphic design services in Surat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design surat", "graphic design agency surat", "graphic design company surat"],
};

export default function GraphicdesignInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
