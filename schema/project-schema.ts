export const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "projectUrl",
      title: "Project Url",
      type: "string",
    },
    {
      name: "codeUrl",
      title: "Code Url",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    },
    {
      name: "imageUrl",
      title: "Image Url",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "type",
      title: "Type",
      type: "string",
    },
  ],
};
