export const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "intro",
      title: "Intro",
      type: "string",
    },
    {
      name: "cv",
      title: "CV",
      type: "file",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "feature" }],
    },
  ],
};
