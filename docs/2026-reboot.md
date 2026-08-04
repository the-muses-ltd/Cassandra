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
they were in 2019, and The Muses' purpose, free access to education for all,
has not aged.

**The 2019 product design has.** Its core value was *discovery*: helping
learners find free resources. That problem has since been largely solved by
search engines, established directories (Class Central, OER Commons), the
providers' own reach, and, decisively, AI assistants that answer "how do I
learn X for free?" instantly and personally. A votes-and-comments link
directory enters that field with no advantage.

**What remains genuinely unsolved is guidance.** Free content is abundant;
free *structure* is scarce. Learners without educated families, mentors or
money don't lack links. They lack a trustworthy answer to "what do I learn,
in what order, and how do I prove it to an employer?" The enormous popularity
of community-maintained route maps (roadmap.sh, free-programming-books,
Teach Yourself CS) is evidence of how strong that need is.

**The old codebase was unsalvageable regardless:** create-react-app,
React 16, Apollo Boost and Prisma 1 are all end-of-life; revival meant a
rewrite in any case.

## The decision

Rebuild from scratch as a **static, content-first learning-paths site**:

- **Paths, not a directory.** Ordered stages through hand-vetted free
  resources, each with a rationale and a portfolio *checkpoint*, keeping the
  original roadmap's vocational, portfolio-based vision.
- **Git is the backend.** Content is schema-validated markdown; community
  contribution happens by pull request; the review that used to be
  votes-and-comments becomes open code review. No accounts, no moderation
  queue, no database to run or secure.
- **Static and tiny.** Near-zero hosting cost (sustainable for a non-profit
  with no income by design), fast on cheap devices, offline-capable via a
  service worker, because the learners the mission targets often have the
  worst connections.
- **Progress in localStorage.** The one interactive feature learners need,
  with zero privacy cost.

What was deliberately dropped: authentication, votes, comments, crawlers, and
the GraphQL backend. What was deliberately kept: the mission, the vocational
Stage 1 focus from the original educational roadmap, the MIT license, and the
name.

The 2019 implementation is preserved in git history for anyone curious.

---

## Postscript (August 2026): one page, not a platform

Days after the learning-paths prototype above was built, The Muses took the
assessment to its honest conclusion and went a step further.

**The paths site was still curation: fish, nicely arranged.** Every path it
contained is something a learner can now generate on demand, personalized to
their goal, hours and prior knowledge, in one conversation with a free AI
assistant. A hand-written generic path cannot beat that, and maintaining a
worse version of a solved thing is not the mission. The genuinely durable
value was much smaller than a site: the *method* for structuring your own
free education, and a *short list* of institutions whose material is free as
a mission rather than as a funnel. That fits on one page.

**The decision:** replace the site with a single self-contained HTML page, a
teach-a-person-to-fish page, and delete the toolchain entirely. No
dependencies, no build step, no JavaScript, no tracking. The 2019 app's 391
open security alerts were a lesson in what unmaintained web applications
become; a page with no dependency tree cannot rot that way, and this project
has already proven it may sit unattended for years.

**Where the effort goes instead: adaptive learning.** Static content, even
perfectly curated, teaches everyone the same material in the same order at
the same pace. The remaining, real inequity is access to *teaching*:
instruction that diagnoses, paces and remediates like a tutor does. Software
with that behavior exists but is overwhelmingly paid, narrow or piloted, not
freely and widely available. Making it so is the hard problem worthy of The
Muses' building energy, and the subject of its next chapter.

The learning-paths prototype (Astro, four paths, 24 vetted resources) is
preserved in this branch's git history alongside the 2019 app.
