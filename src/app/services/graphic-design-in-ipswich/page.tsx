import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Ipswich | TML Agency",
  description: "TML offers expert graphic design services in Ipswich. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["graphic design ipswich", "graphic design agency ipswich", "graphic design company ipswich"],
};

export default function GraphicDesignInIpswichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
