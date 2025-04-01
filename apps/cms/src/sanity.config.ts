// apps/cms/sanity.config.ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/schemas/schema";

export default defineConfig({
  name: "default",
  title: "Zaldivar & Co. CMS",

  // ✅ Add your correct projectId here
  projectId: "yn0vc75n", // <-- Replace this with your actual project ID
  dataset: "production",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
