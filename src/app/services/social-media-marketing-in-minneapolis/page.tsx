import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Minneapolis | TML Agency",
  description: "TML offers expert social media marketing services in Minneapolis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing minneapolis", "social media marketing agency minneapolis", "social media marketing company minneapolis"],
};

export default function SocialMediaInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
