import type { Plugin } from "#app";
import type * as anime from "animejs";

declare const plugin: Plugin<{
  anime: typeof anime;
}>;

export default plugin;
