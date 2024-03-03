import graphqlLoaderPlugin from '@luckycatfactory/esbuild-graphql-loader';
import { optimizeDocumentNode } from '@graphql-tools/optimize';
import  { getEntryPoints } from './getEntryPoints.js'

const getPlugins = (plugins = []) => ([
  graphqlLoaderPlugin.default({
    mapDocumentNode: documentNode => optimizeDocumentNode(documentNode)
  }),
  ...plugins
])

export const DEFAULT_CONFIG = {
  entryPoints: getEntryPoints(),
  entryNames: '[dir]/[name]',
  chunkNames: '_/[name]/[hash]',
  assetNames: '_/_/[ext]/[name]/[hash]',
  bundle: true,
  write: true,
  platform: 'node',
  target: ['node18', 'node20'],
  legalComments: 'none',
  mainFields: ['module', 'main'],
  preserveSymlinks: true,
  format: 'esm',
  minify: true,
  splitting: true,
  packages: 'external',
  outbase: 'src',
  outdir: '.',
  sourcemap: 'inline',
  treeShaking: true,
  allowOverwrite: true,
}

export function getESBuildConfig(config = {}) {
  return {
    ...DEFAULT_CONFIG,
    ...config,
    plugins: getPlugins(config?.plugins)
  };
}
