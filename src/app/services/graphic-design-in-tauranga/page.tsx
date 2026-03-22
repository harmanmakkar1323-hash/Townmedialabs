import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Tauranga | TML Agency",
  description: "TML offers expert graphic design services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["graphic design tauranga", "graphic design agency tauranga", "graphic design tauranga nz"],
};

export default function GraphicDesignInTaurangaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
