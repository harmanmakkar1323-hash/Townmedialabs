import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert social media marketing services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing umm al quwain", "social media marketing agency umm al quwain", "social media marketing company umm al quwain"],
};

export default function SocialMediaInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
