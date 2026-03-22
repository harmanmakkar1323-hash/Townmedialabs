import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Jalandhar | TML Agency",
  description: "TML offers expert social media marketing services in Jalandhar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing jalandhar", "social media marketing agency jalandhar", "social media marketing company jalandhar"],
};

export default function SocialmediaInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
