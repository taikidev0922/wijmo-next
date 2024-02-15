module.exports = {
  input: "api", // "input" of aspida is "output" for openapi2aspida
  outputEachDir: true, // Generate $api.ts in each endpoint directory
  openapi: { inputFile: "mtx-api.yaml" },
};
