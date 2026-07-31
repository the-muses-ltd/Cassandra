// @ts-check
import { defineConfig } from 'astro/config';

// Static output: Cassandra is deliberately a fully static site so it can be
// hosted for free (or nearly free) by a non-profit, cached aggressively, and
// served fast on slow connections and cheap devices.
export default defineConfig({
  site: 'https://the-muses-ltd.github.io',
  trailingSlash: 'ignore',
});
