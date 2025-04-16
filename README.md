<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: NuxtAnime
- Package name: nuxt-anime
- Description: A Adapter for Animejs v4 and Nuxt/Vue
-->

# NuxtAnime

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]
[![Volta][volta-src]][volta-href]
[![Anime][anime-src]][anime-href]

A Plug & Play Adapter for the new Anime.js 4 Version.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/Enternikot/NuxtAnime/tree/master/playground?file=package.json)
- [📖 &nbsp;Documentation](https://nuxtanime.vercel.app/)

## Features

<!-- Highlight some of the features your module provide here -->
- ✨ **Zero Configuration**: No setup required to get started.
- 💪 **Flexible Usage**: Choose your style – use as **Composables**, **Directives**, or **Components**.
- 👷 **Core Features**: Currently supports `animate` and `timeline`. More functions and helpers are planned!
- 👷 **Type-Safe**: Full TypeScript support for current Anime.js v4 parameters.
- 🧩 **Easy & Customizable**: Simple to integrate and fully adaptable to your needs.
- 🕹️ **Full Control**: Provides complete access to the `JSAnimation` object and methods returned by Anime.js for fine-grained control.

## Quick Setup

Install the Module manually with:

```bash
npm install nuxt-anime
```

Then, add it to your `modules` in your `nuxt.config`

```js
export default defineNuxtConfig({
  modules: ["nuxt-anime"],
});
```

That's it! You can now use NuxtAnime in your Nuxt app ✨

```js
<script>
  const box = useTemplateRef("box");
  const anim = await useAnimate(box, {
    autoplay: false,
    x: 100,
    rotate: 360,
  });
</script>
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

## 📑 License

Published under the [MIT License](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-anime/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-anime
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-anime.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-anime
[license-src]: https://img.shields.io/npm/l/nuxt-anime.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-anime
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
[anime-src]: https://img.shields.io/badge/Anime.js-020420
[anime-href]: https://animejs.com/
[volta-src]: https://img.shields.io/badge/Open%20Board-020420?logo=volta
[volta-href]: https://volta.net/Enternikot/NuxtAnime
