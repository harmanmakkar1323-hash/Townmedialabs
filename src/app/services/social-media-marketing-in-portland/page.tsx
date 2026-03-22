import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["portland"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Portland | TML Agency",
  description: "TML offers expert social media marketing services in Portland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing portland", "social media marketing agency portland", "social media marketing company portland"],
};

export default function SocialMediaInPortlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
