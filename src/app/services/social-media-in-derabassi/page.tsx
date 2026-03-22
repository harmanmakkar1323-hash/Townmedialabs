import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Derabassi | TML Agency",
  description: "TML offers expert social media marketing services in Derabassi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing derabassi", "social media marketing agency derabassi", "social media marketing company derabassi"],
};

export default function SocialmediaInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
