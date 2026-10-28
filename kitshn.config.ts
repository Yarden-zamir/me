import { defineApp } from "kitshn";

// kitshn 2 (https://kit.yarden-zamir.com): the built Obsidian site on www.yarden-zamir.com, public like before. The
// build job of deploy-cloudflare.yml builds it on ubuntu-22.04 (Python 3.8, zola); kitshn deploys that artifact,
// so the recipe names no build. The CV (.cloudflare/cv) stays on wrangler: a repo has one recipe (K-804).
export default defineApp({
  static: { output: "public" },
  deploy: [
    { on: "push", branch: "main", name: "prod", address: "www.yarden-zamir.com", startsIn: "Everyone" },
    { on: "pull_request", name: "pr-{pr}", ephemeral: true },
  ],
});
