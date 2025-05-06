import { defineIntegration, createResolver } from "astro-integration-kit";

export default defineIntegration({
  name: "indiecaster",
  defaults: {
    logo: "./assets/logo.png",
  },
  setup(options) {
    // These are the options passed in when you use your integration
    return {
      "astro:config:setup": ({ addDts, addVirtualImport }) => {
        const { resolve } = createResolver(import.meta.url); // Assuming your `astro.config.ts` is at the root of your project

        options.resolvedLogo = resolve(options.options.logo);

        addVirtualImport({
          name: "virtual:indiecaster/config",
          content: `export default ${JSON.stringify(options)}`,
        });

        addDts({
          name: "indiecaster",
          content: `declare module "virtual:indiecaster/config" { export default ${JSON.stringify(
            options
          )} }`,
        });
      },
    };
  },
});
