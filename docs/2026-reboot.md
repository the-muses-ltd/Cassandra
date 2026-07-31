# Decision record: the 2026 reboot

*July 2026*

## The question

Cassandra's last commit before this reboot was December 2019. When the
project was picked back up, the first task was an honest needs assessment:
**is there any need for this in today's day and age?**

## What Cassandra was (2019)

A database-backed aggregator of free educational resources: a React 16 /
Apollo GraphQL client (with a Prisma 1 backend that never reached this
repository), user accounts, posts, votes, comments, and planned web crawlers
to scrape course listings from open-education providers. The MVP frontend was
roughly a third built when development stopped.

## The assessment

**The mission still stands.** Economic barriers to education are as real as
they were in 2019, and The Muses' purpose — free access to education for all
— has not aged.

**The 2019 product design has.** Its core value was *discovery*: helping
learners find free resources. That problem has since been largely solved by
search engines, established directories (Class Central, OER Commons), the
providers' own reach, and — decisively — AI assistants that answer "how do I
learn X for free?" instantly and personally. A votes-and-comments link
directory enters that field with no advantage.

**What remains genuinely unsolved is guidance.** Free content is abundant;
free *structure* is scarce. Learners without educated families, mentors or
money don't lack links — they lack a trustworthy answer to "what do I learn,
in what order, and how do I prove it to an employer?" The enormous popularity
of community-maintained route maps (roadmap.sh, free-programming-books,
Teach Yourself CS) is evidence of how strong that need is.

**The old codebase was unsalvageable regardless:** create-react-app,
React 16, Apollo Boost and Prisma 1 are all end-of-life; revival meant a
rewrite in any case.

## The decision

Rebuild from scratch as a **static, content-first learning-paths site**:

- **Paths, not a directory.** Ordered stages through hand-vetted free
  resources, each with a rationale and a portfolio *checkpoint* — keeping the
  original roadmap's vocational, portfolio-based vision.
- **Git is the backend.** Content is schema-validated markdown; community
  contribution happens by pull request; the review that used to be
  votes-and-comments becomes open code review. No accounts, no moderation
  queue, no database to run or secure.
- **Static and tiny.** Near-zero hosting cost (sustainable for a non-profit
  with no income by design), fast on cheap devices, offline-capable via a
  service worker — because the learners the mission targets often have the
  worst connections.
- **Progress in localStorage.** The one interactive feature learners need,
  with zero privacy cost.

What was deliberately dropped: authentication, votes, comments, crawlers, and
the GraphQL backend. What was deliberately kept: the mission, the vocational
Stage 1 focus from the original educational roadmap, the MIT license, and the
name.

The 2019 implementation is preserved in git history for anyone curious.
