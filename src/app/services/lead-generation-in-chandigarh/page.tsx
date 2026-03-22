import type { Metadata } from "next";
import { chandigarhServices } from "@/data/chandigarhServices";
import ChandigarhServiceTemplate from "@/components/templates/ChandigarhServiceTemplate";

const data = chandigarhServices["lead-generation-in-chandigarh"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
};

export default function UleadUgenerationUinUchandigarhPage() {
  return <ChandigarhServiceTemplate data={data} />;
}
