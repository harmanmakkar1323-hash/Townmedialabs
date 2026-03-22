import type { Metadata } from "next";
import { chandigarhServices } from "@/data/chandigarhServices";
import ChandigarhServiceTemplate from "@/components/templates/ChandigarhServiceTemplate";

const data = chandigarhServices["website-development-in-chandigarh"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
};

export default function UwebsiteUdevelopmentUinUchandigarhPage() {
  return <ChandigarhServiceTemplate data={data} />;
}
