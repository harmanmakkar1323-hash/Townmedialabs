import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edmonton"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Edmonton | TML Agency",
  description: "TML offers expert social media marketing services in Edmonton, Alberta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing edmonton", "social media marketing agency edmonton"],
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
