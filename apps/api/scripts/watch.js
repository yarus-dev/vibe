#!/usr/bin/env node
import { context as esbuild } from 'esbuild'
import { getESBuildConfig } from './utils/getESBuildConfig.js'

const CONFIG = getESBuildConfig({
  minify: false,
  sourcemap: 'external',
  outdir: 'node_modules/.cache/@app/api',
  packages: 'external',
});

const ctx = await esbuild(CONFIG);

try {
  await ctx.watch();
  console.log('watching...')
} catch (error) {
  console.error('Error watching:', error);
}
