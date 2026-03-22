import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert social media marketing services in Visakhapatnam. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing visakhapatnam", "social media marketing agency visakhapatnam", "social media marketing company visakhapatnam"],
};

export default function SocialmediaInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
