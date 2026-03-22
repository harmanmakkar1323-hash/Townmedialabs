import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Hobart | TML Agency",
  description: "TML offers expert social media marketing services in Hobart. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing hobart", "social media marketing agency hobart", "social media marketing company hobart"],
};

export default function SocialMediaInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
