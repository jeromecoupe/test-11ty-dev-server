# Testing Eleventy dev server

Reduced test case for 11ty dev server. Both JS and CSS files are generated using NPM scripts.

**Goal**: use 11ty dev server via the `npx @11ty/eleventy --serve` CLI command. Use the `input` option (to watch the dist folder) and/or `addWatchTarget` (to watch source folders) so pages reload when CSS or JS files changes are triggered by an external assets pipeline (NPM scripts).

**Result**: HTML changes are picked up by the server, while JS and CSS file changes are not.
