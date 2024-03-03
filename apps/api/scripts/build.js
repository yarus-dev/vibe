#!/usr/bin/env node
import { build as esbuild } from 'esbuild'
import { getESBuildConfig } from './utils/getESBuildConfig.js'

const CONFIG = getESBuildConfig();

try {
  await esbuild(CONFIG);
  console.log('Built successfully!')
} catch (error) {
  console.error('Error building:', error);
}
