#!/usr/bin/env node
import * as esbuild from 'esbuild'
import graphqlLoaderPlugin from '@luckycatfactory/esbuild-graphql-loader';
import { optimizeDocumentNode } from '@graphql-tools/optimize';


let result = await esbuild.build({
  entryPoints: ['src/api/graphql.js'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  splitting: false,
  packages: 'external',
  outfile: 'api/graphql.js',
  allowOverwrite: true,
  plugins: [graphqlLoaderPlugin.default({
    mapDocumentNode: documentNode => optimizeDocumentNode(documentNode)
  })],
})

// const result = await ctx.build()
console.log(result)
