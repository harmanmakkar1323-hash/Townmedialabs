import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Sharjah | TML Agency",
  description: "TML offers expert graphic design services in Sharjah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design sharjah", "graphic design agency sharjah", "graphic design company sharjah"],
};

export default function GraphicDesignInSharjahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
