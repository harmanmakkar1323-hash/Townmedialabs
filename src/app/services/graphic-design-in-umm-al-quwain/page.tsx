import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert graphic design services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design umm al quwain", "graphic design agency umm al quwain", "graphic design company umm al quwain"],
};

export default function GraphicDesignInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
