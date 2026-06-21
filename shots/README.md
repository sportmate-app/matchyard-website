# App screenshots (drop-in slots)

The landing page (`../index.html`) renders **high-fidelity CSS mockups** of the
app as stand-ins. To swap in real screenshots, drop a PNG into this folder with
the exact filename below, then **uncomment the matching `<img>`** in
`index.html` (each one is marked with a `<!-- swap: ... -->` comment right above
a hidden `<img class="shot">` that has the same `id`).

| Filename            | `id` in index.html | Where it appears            | Screen to capture            |
| ------------------- | ------------------ | --------------------------- | ---------------------------- |
| `shot-discover.png` | `shot-discover`    | Hero — large iPhone frame   | **Discover** feed (game list)|
| `shot-game.png`     | `shot-game`        | Features — small phone #1   | **Play Now** requests        |
| `shot-chat.png`     | `shot-chat`        | Features — small phone #2   | **Chat** / chat-detail       |
| `shot-match.png`    | `shot-match`       | Features — small phone #3   | **AI Match** / "It's a match"|
| `shot-profile.png`  | `shot-profile`     | Features — small phone #4   | **Player profile**           |

## Image spec

- **Format:** PNG (transparent or solid — the frame clips to rounded corners).
- **Orientation:** portrait iPhone, **dark mode** (to match the navy UI).
- **Aspect ratio:** ~9:19.5 (e.g. iPhone 15 Pro **1179 × 2556 px**). Any tall
  portrait works; the `<img>` uses `object-fit: cover`.
- **Content:** capture only the app screen (no device chrome / status bar is
  fine — the page draws its own frame and notch).

## How the swap works

Each slot is a hidden `<img class="shot">`. Setting a real `src` and removing
`hidden` makes it cover the CSS mockup (it's absolutely positioned at `z-index`
above the stand-in). The bundled JS auto-reveals any `.shot` that already has a
`src` and loads successfully, and hides it again on load error — so a broken
path safely falls back to the CSS mockup.

Example (hero):

```html
<!-- before -->
<img id="shot-discover" class="shot" alt="MatchYard Discover feed" hidden />

<!-- after -->
<img id="shot-discover" class="shot" src="shots/shot-discover.png"
     alt="MatchYard Discover feed" />
```
