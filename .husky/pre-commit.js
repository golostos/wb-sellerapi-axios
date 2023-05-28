const { execSync } = require("child_process");
const axios = require("axios");
const fs = require("fs");

(async function main() {
  const packageJson = JSON.parse(
    fs.readFileSync("./package.json", "utf8")
  );
  const { name, version } = packageJson;

  try {
    const response = await axios.get(
      `https://registry.npmjs.org/${name}`
    );
    const latestVersion = response.data["dist-tags"].latest;

    if (version === latestVersion) {
      execSync("npm version patch --no-git-tag-version");
      execSync("git add package.json");
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("Package not found in npm registry");
      process.exit(0);
    }
    console.error(`Failed to fetch package data: ${error}`);
    process.exit(1);
  }
})();
