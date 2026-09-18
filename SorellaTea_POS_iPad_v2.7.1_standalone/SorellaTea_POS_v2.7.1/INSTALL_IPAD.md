# Install Sorella Tea POS on iPad

This build is a Progressive Web App (PWA). It installs from Safari and opens like an app.

1. Deploy the project to Netlify (the project already includes `netlify.toml` and the Netlify Function).
2. Open the deployed **HTTPS** address in Safari on the iPad.
3. Tap **Share** → **Add to Home Screen** → **Add**.
4. Open **Sorella POS** from the Home Screen.
5. Launch it once while online so the latest server state is cached on the iPad.
6. If the connection drops, the POS continues using the cached menu and local offline data. Changes made offline are queued and sync when the connection returns.

The original Sorella logo is retained. Individual product/flavor images are intentionally removed.
