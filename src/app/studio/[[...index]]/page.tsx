"use client";

import { NextStudio } from "next-sanity/studio";
import { config } from "../../../../sanity.config";

const SanityStudioPage = () => {
  return <NextStudio config={config} />;
};

export default SanityStudioPage;
