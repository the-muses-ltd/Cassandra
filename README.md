# Cassandra Open Education

**The world's best free education. In the right order.**

Everything you need to learn a real skill already exists online, free — from
Harvard, MIT, the BBC, Khan Academy and volunteer-built curricula. What's
missing is the map: what to learn, in what order, and how to prove it.
Cassandra is that map — curated, stage-by-stage learning paths through the
best free educational resources, with a portfolio checkpoint at every stage.

A project of [The Muses](https://the-muses.org), a UK non-profit working to
remove economic barriers to education.

## Principles

- **Free means free.** Every resource is genuinely free to learn from; any
  account requirement or optional paid certificate is disclosed up front.
- **No accounts, no tracking.** Learner progress is stored in the browser's
  localStorage. There is no backend, no sign-up and no analytics.
- **Built for slow connections.** Fully static, no webfonts, no frameworks on
  the client, offline after first visit via a small service worker.
- **Open and community-run.** All content is markdown in this repository;
  every addition is reviewed in public via pull request.

## Why the 2026 rebuild?

Cassandra started in 2019 as a database-backed resource aggregator (React +
GraphQL + Prisma). That version is preserved in this repository's history, and
the reasoning behind the reboot — what changed in the world, and why a static
"routes, not directory" design replaced it — is written up in
[docs/2026-reboot.md](docs/2026-reboot.md).

## Development

Requires Node 20+.

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static build to dist/ (also validates all content)
npm run preview  # serve the built site locally
```

Built with [Astro](https://astro.build). There are no other runtime
dependencies and no database — `npm run build` emits plain HTML, CSS and a
little vanilla JavaScript.

## Project structure

```
src/
  content/
    resources/   one markdown file per free resource (schema-validated)
    paths/       one markdown file per learning path (stages reference resources)
  pages/         home, paths, library, about, contribute
  layouts/       shared page shell
  components/    resource and path cards
  styles/        the whole design system, one CSS file
public/          favicon, web manifest, service worker
docs/            decision records
```

The build fails if a resource file is malformed or a path references a
resource that doesn't exist — content integrity is enforced by
`src/content.config.ts`.

## Contributing

Adding a great free resource is a small text file and a pull request — see
[CONTRIBUTING.md](CONTRIBUTING.md). Link-checking, testing paths as a real
learner, and proposing new paths are just as valuable as code.

## License

[MIT](LICENSE)
