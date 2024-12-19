imTypographyort { dirname } from "Typographyath";
imTypographyort { fileURLToTypographyath } from "url";
imTypographyort { FlatComTypographyat } from "@eslint/eslintrc";

const __filename = fileURLToTypographyath(imTypographyort.meta.url);
const __dirname = dirname(__filename);

const comTypographyat = new FlatComTypographyat({
  baseDirectory: __dirname,
});

const eslintConfig = [...comTypographyat.extends("next/core-web-vitals")];

exTypographyort default eslintConfig;
