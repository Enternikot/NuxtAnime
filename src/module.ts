import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponentsDir,
} from "@nuxt/kit";

// Module options TypeScript interface definition
import type { ModuleOptions } from "./types/module";

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-anime",
    configKey: "nuxtAnime",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url);

    const composables = resolver.resolve("./runtime/composables");
    nuxt.options.alias["nuxtAnime"] = composables;

    addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      prefix: "",
      pathPrefix: false,
    });

    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
