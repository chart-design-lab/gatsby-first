
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/workspaces/gatsby-first/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/workspaces/gatsby-first/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/workspaces/gatsby-first/src/pages/page-2.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/workspaces/gatsby-first/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/workspaces/gatsby-first/src/pages/using-typescript.tsx"))
}

