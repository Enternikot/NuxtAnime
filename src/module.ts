import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponentsDir,
  addImportsDir,
} from "@nuxt/kit";

// Module options TypeScript interface definition
// import type { ModuleOptions } from "./types/module";

export default defineNuxtModule({
  meta: {
    name: "nuxt-anime",
    configKey: "nuxtAnime",
    compatibility: {
      nuxt: ">=3.0.0",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);

    const composables = resolver.resolve("./runtime/composables");
    addImportsDir(composables);

    addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      prefix: "",
      pathPrefix: false,
    });

    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
