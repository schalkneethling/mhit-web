import { defineConfig } from "astro/config";

import IndieCaster from "./integration/indiecaster.js";
import { indieCasterConfig } from "./indiecaster.config.js";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [IndieCaster(indieCasterConfig)],
});
