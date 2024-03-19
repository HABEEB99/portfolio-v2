export const qualification = {
  name: "qualification",
  title: "Qualification",
  type: "document",
  fields: [
    {
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "education" }],
    },
    {
      name: "experience",
      title: "Experience",
      type: "array",
      of: [{ type: "experience" }],
    },
  ],
};
