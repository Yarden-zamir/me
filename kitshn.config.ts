import { defineApps } from "kitshn";

// kitshn 2 (https://kit.yarden-zamir.com), two apps of this repo:
// - app: the built Obsidian site on www.yarden-zamir.com, public. The build job of deploy-cloudflare.yml builds it on
//   ubuntu-22.04 (Python 3.8, zola); kitshn deploys that artifact, so the recipe names no build.
// - cv: the CV PDF on cv.yarden-zamir.com, public. Its folder needs no build; _redirects sends / to the PDF.
export default defineApps({
  app: {
    static: { output: "public" },
    deploy: [
      { on: "push", branch: "main", name: "prod", address: "www.yarden-zamir.com", startsIn: "Everyone" },
      { on: "pull_request", name: "pr-{pr}", ephemeral: true },
    ],
  },
  cv: {
    static: { output: ".cloudflare/cv/public" },
    deploy: [
      { on: "push", branch: "main", name: "prod", address: "cv.yarden-zamir.com", startsIn: "Everyone" },
      { on: "pull_request", name: "pr-{pr}", ephemeral: true },
    ],
  },
});
