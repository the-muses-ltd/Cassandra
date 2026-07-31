import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * A resource is a single free educational offering: a course, book, video
 * series, interactive tutorial, reference, or whole platform.
 *
 * The quality bar for inclusion is documented in CONTRIBUTING.md — the short
 * version: learning the material must be genuinely free, from a provider that
 * is likely to still exist in five years.
 */
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    provider: z.string(),
    url: z.string().url(),
    description: z.string().max(400),
    subjects: z
      .array(
        z.enum([
          'web-development',
          'programming',
          'computer-science',
          'data',
          'mathematics',
          'english',
          'books',
        ])
      )
      .min(1),
    level: z.enum(['beginner', 'intermediate', 'advanced', 'all']),
    format: z.enum(['course', 'book', 'video', 'interactive', 'reference', 'platform']),
    language: z.string().default('en'),
    /** Anything a learner should know before clicking, e.g. "free account needed to save progress". */
    notes: z.string().optional(),
  }),
});

/**
 * A path is an ordered route through resources: stages, each with the
 * resources to use, why they were chosen, and a checkpoint — a concrete
 * artifact the learner produces to prove the stage to themselves (and,
 * assembled into a portfolio, to employers).
 */
const paths = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paths' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string().max(160),
    audience: z.string(),
    outcome: z.string(),
    /** Rough total effort, stated honestly, e.g. "6–12 months part-time". */
    effort: z.string(),
    order: z.number().int().default(99),
    stages: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          resources: z.array(reference('resources')).min(1),
          checkpoint: z.string(),
        })
      )
      .min(1),
  }),
});

export const collections = { resources, paths };
