import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Umm Al Quwain",
  description: "Top-rated Graphic Design company in Umm Al Quwain. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
  keywords: ["graphic design umm al quwain", "graphic design agency umm al quwain", "graphic design company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-umm-al-quwain",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Umm Al Quwain",
    description: "Top-rated Graphic Design company in Umm Al Quwain. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Umm Al Quwain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Umm Al Quwain",
    description: "Top-rated Graphic Design company in Umm Al Quwain. TML offers expert Graphic Design services for 500+ businesses. Get a free Graphic Design consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInUmmAlQuwainPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
