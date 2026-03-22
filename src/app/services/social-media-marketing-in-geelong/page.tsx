import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Geelong | TML Agency",
  description: "TML offers expert social media marketing services in Geelong. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing geelong", "social media marketing agency geelong", "social media marketing company geelong"],
};

export default function SocialMediaInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
