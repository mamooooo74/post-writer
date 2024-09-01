import { defineDocumentType, makeSource } from "contentlayer2/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: {
      type: "string",
    },
    date: {
      type: "date",
    },
    piblished: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/")[1],
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
});
