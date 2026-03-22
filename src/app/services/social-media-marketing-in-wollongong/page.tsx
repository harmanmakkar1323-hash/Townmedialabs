import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Wollongong | TML Agency",
  description: "TML offers expert social media marketing services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing wollongong", "social media marketing agency wollongong", "social media marketing company wollongong"],
};

export default function SocialMediaInWollongongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
