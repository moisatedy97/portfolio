import path from "path";

const buildEslintCommand = (/** @type {string[]} */ filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

const config = {
  "src/**/*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": ["prettier --write --ignore-path .gitignore ."]
};

export default config;
