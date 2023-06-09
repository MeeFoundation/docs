# Contributor Manual

We welcome contributions of any size and contributors of any skill level.
As an open source project, we believe in giving back to our contributors.
We are happy to help with guidance on PRs, technical writing, and turning any feature idea into a reality.

> **Tip for new contributors:**
> Take a look at [GitHub's Docs](https://docs.github.com/en/get-started/quickstart/hello-world) for helpful information on working with GitHub.

## About this repo

This repo is a “monorepo,” meaning it contains several projects in one. It contains the Mee Foundation docs site in [`docs/`](./docs/) and the Starlight package dependency in [`packages/`](./packages/).

### Setting up a development environment

 **Install dependencies** with `pnpm`:

   ```sh
   pnpm i
   ```

### Testing changes while you work

Run the Astro dev server on the docs site to see how changes you make impact a project using Starlight.

To do this, move into the `docs/` directory from the root of the repo and then run `pnpm dev`:

```sh
cd docs
pnpm dev
```

You should then be able to open <http://localhost:3000> and see your changes.
