import { Config } from "sanity";
// import { deskTool } from "sanity/desk";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schema";

export const config: Config = {
  name: "default",
  title: "portfolio-studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/studio",

  // plugins: [deskTool(), visionTool()],
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
};
