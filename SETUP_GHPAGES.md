# GitHub Pages Deployment Instructions

1. Ensure your repository is pushed to GitHub.
2. Update `vite.config.ts` to set the `base` option to your repo name (e.g., `/Figma-CREMP-Popup/`).
3. Install the `gh-pages` package as a dev dependency.
4. Add deploy scripts to `package.json`.
5. Run the deploy script to publish to GitHub Pages.

---

## Example deploy script for Vite + React

1. Install gh-pages:

    npm install --save-dev gh-pages

2. Update `vite.config.ts`:

    export default defineConfig({
      base: '/Figma-CREMP-Popup/',
      ...
    })

3. Add scripts to `package.json`:

    "scripts": {
      ...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }

4. Deploy:

    npm run deploy

---

See https://vitejs.dev/guide/static-deploy.html#github-pages for more details.
