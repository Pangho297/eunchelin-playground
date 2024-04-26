require("dotenv").config({
  path: ".env/.env.dev",
});

module.exports = {
  client: {
    includes:["./src/**/*.ts", "./src/**/*.tsx"],
    name: "eunchelin",
    tagName: "gql",
    service: {
      url: import.meta.env.VITE_API_BASE_URL,
    }
  }
}