# MatchYard — SEO Strategy

**Domain:** https://www.matchyard.us
**Last updated:** 2026-07-15 (keyword research via Google Keyword Planner, US / English)
**Owner:** update this file whenever keywords, rankings, or content change.

> Internal working doc — excluded from deployment via `.vercelignore`.

---

## 1. The landscape (read before picking targets)

Keyword Planner (US) shows this space splits into three groups:

1. **Retail / gear terms — highest volume, OFF-brand. Do not target.**
   `sporting goods near me`, `Big 5 near me`, `Scheels near me`, `play it again sports`,
   `sports shop near me`, `pickleball paddles near me`. These are store/product queries;
   MatchYard is not a retailer.
2. **Place / court-finding — high volume, ADJACENT.** `pickleball near me` (100K–1M),
   `basketball court near me` (100K–1M), `indoor pickleball near me`, `outdoor basketball
   courts near me`. Location intent. MatchYard fits as "find games *and people* at these
   courts." Competitive (Google Maps + facility sites own these) — target via content, not
   the homepage alone.
3. **Partner / game / pickup — MODERATE volume, HIGH intent-match. This is the core.**
   `pickup basketball`, `pickup soccer`, `tennis partner`, `workout partner`,
   `find a tennis partner`, `run club near me`. Lower volume but exactly MatchYard's value
   prop — most winnable and best-converting.

**Rule:** chase intent-match, not raw volume. The place-finding head terms are aspirational
(long-term, content-led); the partner/pickup terms are the near-term wins.

---

## 2. Primary keyword targets (mapped to pages)

Volume = Google Keyword Planner avg-monthly-searches band (US). Comp = competition.

| Keyword | Volume band | Comp | Target page | Notes |
|---|---|---|---|---|
| sports partner app | (brand-category) | — | Home | Core positioning term |
| find sports partners near me | (long-tail) | Low | Home | Primary intent |
| pickup games near me | 1K–10K | Low | Home | Strong intent |
| sports near me | 10K–100K | Low | Home | Broad, high volume |
| pickup basketball | 1K–10K | Low | Home + basketball blog | Core |
| pickup soccer | 1K–10K | Low | Soccer blog | Core |
| pickleball near me | 100K–1M | Low | **New page (gap)** | Huge; adjacent |
| basketball court near me | 100K–1M | Low | **New page (gap)** | Huge; adjacent |
| run club near me | 1K–10K (+900% YoY) | Low | **New page (gap)** | Trending — act now |
| tennis partner / find a tennis partner | 100–1K | Low/Med | Tennis blog | High intent |
| workout partner | 100–1K | Low | Fitness blog | High intent |

## 3. Blog keyword map (existing posts)

| Post | Primary keyword | Band |
|---|---|---|
| how-to-find-a-tennis-partner | how to find a tennis partner | 100–1K core, broad demand |
| pickup-basketball-etiquette | pickup basketball etiquette / pickup basketball | 1K–10K |
| meet-people-new-city-through-sports | how to meet people in a new city | broad |
| tennis-pickleball-rating-systems-explained | NTRP / DUPR rating | mid |
| how-to-find-a-workout-partner | how to find a workout partner | 100–1K |
| find-pickup-soccer-games-near-you | pickup soccer near me | 1K–10K |

## 4. High-demand content gaps to write next (priority order)

1. **Pickleball** — `pickleball near me`, `where to play pickleball`, `find a pickleball
   partner`, `indoor pickleball near me` (100K–1M cluster). Biggest untapped relevant demand.
2. **Run club** — `run club near me`, `how to find a run club`, `start a run club`
   (+900% YoY trending). Move fast while it's rising.
3. **Basketball courts / pickup** — `basketball court near me`, `pickup basketball near me`,
   `outdoor basketball courts near me` (100K–1M cluster).
4. **Broaden suggestions worth a look:** `tennis near me`, `activities near me`,
   `sports facility near me`, `tennis coach near me`.

## 5. On-page status (done)

- Static crawler-safe `<head>` on every page (title, description, canonical, OG/Twitter).
- JSON-LD: Organization + WebSite + MobileApplication (home); BlogPosting + FAQPage (posts).
- `robots.txt` + `sitemap.xml` (10 URLs) — home, /blog/, 6 posts, privacy, terms.

## 6. Measurement & indexing (in progress)

- **Google Analytics 4:** property for www.matchyard.us; gtag installed on all pages/posts.
  Track: traffic sources, landing pages, engagement, waitlist CTA clicks.
- **Google Search Console:** property verified; `sitemap.xml` submitted; key URLs requested
  for indexing. Monitor: impressions, clicks, average position, top queries (GSC = the real
  keyword-performance source once live).

## 7. How to update this doc

Re-run Keyword Planner quarterly with broad head-term seeds (pickup basketball, pickup
soccer, tennis partner, pickleball near me, run club, sports near me). Add winners to the
tables above, retire terms that don't convert, and check GSC for queries you rank for that
aren't targeted yet (easy wins).
