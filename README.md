# Cassandra

**One page that teaches you how to learn anything online, free — and the story
of why it's one page.**

→ **[Read the page](https://cassandraedu.netlify.app)** · [`site/index.html`](site/index.html)

A project of [The Muses](https://the-muses.org), a UK non-profit working to
remove economic barriers to education.

---

## The short version

- **2019** — Cassandra began as a web app cataloguing free educational
  resources: accounts, votes, comments, and planned crawlers. Finding free
  learning material was genuinely hard then, and indexing it was a real
  service.
- **2026** — Picking the project back up, we started with an honest needs
  assessment: *does anyone still need this?* The answer was no. Discovery is
  solved — search engines and free AI assistants answer "where can I learn X
  for free?" instantly and personally, better than any hand-maintained
  directory ever could.
- **Today** — Cassandra is a single static page that teaches the *method*
  instead: how to set a learning goal, get a free AI assistant to build your
  plan, anchor it on institutions that are reliably free, and turn study into
  proof of skill. Give a person a fish and you feed them for a day; teach a
  person to fish and you feed them for a lifetime.
- **Next** — The Muses is turning to the gap that is still real: **adaptive
  learning that is freely and widely available.** It isn't, yet. That's the
  next chapter.

## Why we made the shift

Cassandra's founding problem was scarcity of *access*: free learning material
existed but was scattered, buried under paid courses, and hard to judge. Every
part of that has since been dismantled. The great free platforms —
freeCodeCamp, Khan Academy, MIT OpenCourseWare, The Odin Project — grew into
household names with their own reach. Search got better. And AI assistants
changed the game entirely: any learner with a phone can now get a
personalized, ordered, zero-cost study plan in one conversation, in their own
language, adjusted to their own life.

We briefly rebuilt Cassandra as the "better" version of itself — hand-curated
learning paths with portfolio checkpoints. It was good. It was also, we
realized, still a plate of fish: every path we wrote was something a learner
can now generate on demand, personalized rather than generic. The durable
value wasn't our curation. It was two things small enough to fit on one page:
the **method** for structuring your own free education, and a **short list**
of institutions whose material is free as a mission, not as a marketing
funnel.

There's a quieter reason too. Directories rot. This repository sat untouched
for six years and accumulated 391 open security alerts across its dependency
tree; an unmaintained resource site does worse than nothing, because dead
links and stale picks mislead exactly the people with the least room for
wasted effort. The page that replaced it is a single HTML file with **zero
dependencies, zero build step, and zero tracking**. There is nothing left to
rot. A page like that can be copied, translated, printed, and passed on — and
it can sit unattended for years and still be true.

The full decision record lives in [`docs/2026-reboot.md`](docs/2026-reboot.md).

## What we're focusing on next: adaptive learning

Everything on our short list shares one limitation: it teaches every learner
the same material, in the same order, at the same pace. That's the ceiling of
static content — and it's exactly the thing a good human tutor doesn't do.
Tutors diagnose what you know, catch the moment you get lost, re-explain, back
up, and accelerate when you're ready. Benjamin Bloom measured the effect in
1984: tutored students perform around **two standard deviations** better than
classroom students. It remains one of the most cited findings in education,
and for forty years the response has been the same lament: nobody can afford
a tutor for every learner.

Software that behaves this way — *adaptive learning* — now genuinely exists.
But the capable systems are paid products, narrow single-subject tools, or
institutional pilots. Wealthy students are beginning to get software tutors;
everyone else gets static video. The economic barrier Cassandra was founded to
fight hasn't disappeared — it has moved up a level, from *access to content*
to *access to teaching*.

That is where The Muses is pointing its effort now: **adaptive learning that
is freely and widely available.** It is a much harder problem than a
directory, which is why it's worth working on. This repository stays as the
evergreen guide; the new work will happen under
[The Muses](https://github.com/the-muses-ltd) as it takes shape.

## The repository

```
site/               The entire website: index.html, 404.html, favicon.svg.
                    No build step — what you see is what ships.
docs/2026-reboot.md The decision record for the 2026 shift.
.github/workflows/  A scheduled link check, the only automation left.
netlify.toml        Tells Netlify to publish site/ as-is.
```

The 2019 application (React 16 / Apollo / create-react-app) and the
intermediate 2026 learning-paths prototype (Astro) are both preserved in git
history if you're curious about what came before.

## Contributing

Fix a broken link, sharpen a sentence, translate the page, or argue for a
change to the short list — see [CONTRIBUTING.md](CONTRIBUTING.md). The bar for
the list is deliberately high and the list deliberately short: removals are as
valuable as additions.

## License

[MIT](LICENSE) — including the page itself. Copy it, host it anywhere,
translate it, hand it out. That's the point.
