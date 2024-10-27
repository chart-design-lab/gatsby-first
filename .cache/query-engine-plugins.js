
import * as pluginGatsbyNode0 from "../node_modules/gatsby-plugin-image/gatsby-node"
import * as pluginGatsbyNode1 from "../node_modules/gatsby-source-filesystem/gatsby-node"
import * as pluginGatsbyNode2 from "../node_modules/gatsby-transformer-sharp/gatsby-node"
import * as pluginGatsbyNode3 from "../node_modules/gatsby-plugin-sharp/gatsby-node"
import * as pluginGatsbyNode4 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode5 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode6 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode7 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode8 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode9 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode10 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode11 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode12 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode13 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode14 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode15 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode16 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyWorker0 from "../node_modules/gatsby-plugin-sharp/gatsby-worker"

export const gatsbyNodes = [
{ name: "gatsby-plugin-image", module: pluginGatsbyNode0, importKey: 1 },
{ name: "gatsby-source-filesystem", module: pluginGatsbyNode1, importKey: 2 },
{ name: "gatsby-transformer-sharp", module: pluginGatsbyNode2, importKey: 3 },
{ name: "gatsby-plugin-sharp", module: pluginGatsbyNode3, importKey: 4 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode4, importKey: 5 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode5, importKey: 6 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode6, importKey: 7 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode7, importKey: 8 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode8, importKey: 9 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode9, importKey: 10 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode10, importKey: 11 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode11, importKey: 12 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode12, importKey: 13 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode13, importKey: 14 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode14, importKey: 15 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode15, importKey: 16 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode16, importKey: 17 },
]

export const gatsbyWorkers = [
{ name: "gatsby-plugin-sharp", module: pluginGatsbyWorker0, importKey: 1 },
]

export const flattenedPlugins =
  [
  {
    "resolve": "",
    "id": "a9f9c4c1-d74b-569b-a6ec-6093f5d12592",
    "name": "gatsby-plugin-image",
    "version": "3.13.1",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "createSchemaCustomization",
      "onCreateBabelConfig",
      "onCreateWebpackConfig",
      "preprocessSource"
    ],
    "browserAPIs": [],
    "ssrAPIs": [
      "onRenderBody"
    ],
    "pluginFilepath": "",
    "importKey": 1
  },
  {
    "resolve": "",
    "id": "ff838362-3238-56f2-887c-7df7a13caf7f",
    "name": "gatsby-source-filesystem",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "name": "images",
      "path": "/workspaces/gatsby-first/src/images",
      "fastHash": false
    },
    "nodeAPIs": [
      "onPreInit",
      "pluginOptionsSchema",
      "sourceNodes",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 2
  },
  {
    "resolve": "",
    "id": "822bdf7b-a95a-5885-9351-158705910ac3",
    "name": "gatsby-transformer-sharp",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "onPreInit",
      "onCreateNode",
      "shouldOnCreateNode",
      "createSchemaCustomization",
      "createResolvers"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 3
  },
  {
    "resolve": "",
    "id": "9e618b1c-a2d0-52b1-86ab-f91016f37381",
    "name": "gatsby-plugin-sharp",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "base64Width": 20,
      "stripMetadata": true,
      "defaultQuality": 50,
      "failOnError": true,
      "failOn": "warning"
    },
    "nodeAPIs": [
      "onCreateDevServer",
      "onPostBootstrap",
      "onPluginInit",
      "onPreBootstrap",
      "pluginOptionsSchema"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 4
  },
  {
    "resolve": "",
    "id": "65b98c87-49d4-5f3d-a9fa-40606ec7398f",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspaces/gatsby-first/node_modules/gatsby/dist/internal-plugins/dev-404-page/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 5
  },
  {
    "resolve": "",
    "id": "7dba6f22-2eb6-548d-a139-07ef73fdea56",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspaces/gatsby-first/node_modules/gatsby/dist/internal-plugins/load-babel-config/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 6
  },
  {
    "resolve": "",
    "id": "36ffc886-5ce1-5cf2-a321-3b8f2263b77f",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspaces/gatsby-first/node_modules/gatsby/dist/internal-plugins/internal-data-bridge/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 7
  },
  {
    "resolve": "",
    "id": "3c2bb192-40c1-5f40-af2a-a01e232b0baa",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspaces/gatsby-first/node_modules/gatsby/dist/internal-plugins/prod-404-500/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 8
  },
  {
    "resolve": "",
    "id": "9cfac468-166c-5427-833d-d6860c5d0ce3",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspaces/gatsby-first/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 9
  },
  {
    "resolve": "",
    "id": "06fc8bfd-543b-5f4a-84ea-2320517d8c43",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspaces/gatsby-first/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 10
  },
  {
    "resolve": "",
    "id": "e1ddfb24-699a-55a6-888c-a6d1acf1ba14",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspaces/gatsby-first/node_modules/gatsby/dist/internal-plugins/functions/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 11
  },
  {
    "resolve": "",
    "id": "98149a6c-0aa6-5d4a-9a42-83763fce3d55",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspaces/gatsby-first/node_modules/gatsby-plugin-image/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 12
  },
  {
    "resolve": "",
    "id": "82ad530f-b379-50c5-8a63-428be5b230a5",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspaces/gatsby-first/node_modules/gatsby-source-filesystem/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 13
  },
  {
    "resolve": "",
    "id": "6204932f-10de-5ea0-ae9c-67f5db1c6560",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspaces/gatsby-first/node_modules/gatsby-transformer-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 14
  },
  {
    "resolve": "",
    "id": "36c55678-a479-5f7c-8535-c34ee2bdaef9",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspaces/gatsby-first/node_modules/gatsby-plugin-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 15
  },
  {
    "resolve": "",
    "id": "74a1a858-7556-5ca1-957a-951ced987742",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspaces/gatsby-first/node_modules/gatsby-plugin-manifest/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 16
  },
  {
    "resolve": "",
    "id": "3c4038a7-f710-5f2f-a414-64d96b84f431",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspaces/gatsby-first/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 17
  }
]
