import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Columbus | TML Agency",
  description: "TML offers expert social media marketing services in Columbus. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing columbus", "social media marketing agency columbus", "social media marketing company columbus"],
};

export default function SocialMediaInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
