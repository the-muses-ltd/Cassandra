# Contributing to Cassandra

Thank you — Cassandra only works because people who found the way pass the
route on. You do not need to be a developer to contribute.

## The quality bar

Every resource proposal is reviewed against three questions:

1. **Genuinely free to learn from?** Free trials, "first module free", and
   audit-tiers that nag you into paying don't qualify. A free account
   requirement or an optional paid certificate is fine **if disclosed in the
   resource's `notes` field**.
2. **Excellent, not merely acceptable?** The library is a shortlist, not a
   search engine. Only propose something you would recommend to a friend over
   every alternative.
3. **Likely to last?** Established institutions, foundations and long-running
   community projects — not content that may vanish next year.

## Adding a resource

Create one markdown file in `src/content/resources/`, named after the
resource in kebab-case (e.g. `khan-academy-sql.md`):

```markdown
---
title: Intro to SQL — Querying and managing data
provider: Khan Academy
url: https://www.khanacademy.org/computing/computer-programming/sql
description: Interactive SQL taught in the browser — queries, aggregation,
  joins and modifying databases — with talk-throughs and challenges.
subjects: [data, programming]
level: beginner        # beginner | intermediate | advanced | all
format: interactive    # course | book | video | interactive | reference | platform
language: en
notes: Optional — anything a learner should know before clicking.
---
```

Valid `subjects` values are defined in `src/content.config.ts`; add a new
subject there in the same pull request if none fits. Run `npm run build`
before pushing — it validates every field and fails on broken references.
Avoid YAML pitfalls: if your text contains a colon followed by a space, quote
the whole value.

## Improving or proposing a path

Paths live in `src/content/paths/` — ordered stages, each with a rationale,
resource references (by resource filename) and a **checkpoint**: a concrete
artifact the learner produces. Look at an existing path first; match its tone
— direct, honest about effort, no hype.

The best path authors are people who recently walked the route themselves.
Paths we want next: mathematics (arithmetic → calculus), basic digital
literacy, and paths in languages other than English.

## Without a pull request

Open a [GitHub issue](https://github.com/the-muses-ltd/Cassandra/issues)
describing the resource, broken link or problem, and someone will turn it
into a change. Testing a path as a real learner and reporting where you got
stuck is one of the most valuable contributions there is.

## Code contributions

The site is deliberately boring technology: Astro, one CSS file, a little
vanilla JavaScript, no client frameworks and no backend. Please keep it that
way — every kilobyte matters to a learner on a cheap phone, and every
dependency is a maintenance burden for volunteers. Run `npm run build` before
submitting.

## Conduct

Be kind, assume good faith, and remember many contributors and learners here
are using their second language.
