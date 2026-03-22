import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Cleveland | TML Agency",
  description: "TML offers expert graphic design services in Cleveland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design cleveland", "graphic design agency cleveland", "graphic design company cleveland"],
};

export default function GraphicDesignInClevelandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
