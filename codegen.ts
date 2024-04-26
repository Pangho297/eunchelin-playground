import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  documents: "src/**/*.tsx",
  generates: {
    "./src/types/graphql": {
      preset: "client",
      plugins: [],
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
      config: {
        enumsAsTypes: true,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
