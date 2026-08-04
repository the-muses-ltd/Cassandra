# Contributing to Cassandra

Cassandra is one HTML page, [`site/index.html`](site/index.html), that
teaches people how to learn anything online, free. Keeping one page true is a
job many hands can share, and you do not need to be a developer to help.

## What's welcome

- **Broken or moved links.** The most valuable fix there is. A monthly link
  check runs automatically, but a human report beats it every time.
- **Clearer sentences.** Many readers use English as a second language. If a
  sentence made you read it twice, simplifying it is a real contribution.
- **Translations.** A translated copy (e.g. `site/es/index.html`) helps a
  whole language community at once. Translate meaning rather than words, and
  keep the short list's caveats accurate for your region.
- **Changes to the short list.** See the bar below. Arguing to *remove* an
  entry that no longer meets it is as valuable as adding one.

## The bar for the short list

The list is short on purpose: it's a set of anchors, not a directory. Being a
directory is the thing Cassandra stopped doing. Every entry must be:

1. **Free as a mission, not as a funnel.** The entire skill must be learnable
   without paying. Free accounts are fine; optional paid certificates must be
   called out; free trials and nagging audit tiers disqualify.
2. **Institutionally durable.** Run by a non-profit, university, public
   broadcaster or long-lived community project: something that has been free
   for years and has a reason to stay that way.
3. **Broad enough to matter.** It should take a learner a real distance, not
   cover one narrow topic. One line of description must be enough to know
   when to use it.

## How to make a change

There is no build step. Edit the HTML, open the file in a browser to check
it, and open a pull request:

1. Fork the repository and edit `site/index.html` (any text editor works).
2. Preview by opening the file directly in your browser; what you see is
   exactly what ships.
3. Open a pull request describing what you changed and why.

Please keep the page as it is architecturally: **one self-contained HTML file
per language, no JavaScript, no external requests, no dependencies.** That is
what lets it load on a cheap phone, work offline once saved, be printed and
handed out, and survive years without maintenance.

## Without a pull request

Open a [GitHub issue](https://github.com/the-muses-ltd/Cassandra/issues) and
someone will turn it into a change. "I followed the method and got stuck
here" is one of the most useful issues you can file.

## Conduct

Be kind, assume good faith, and remember many contributors and readers here
are using their second language.
