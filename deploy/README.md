# Heorhii Kutsurais — Portfolio

Static site, ready to deploy to Vercel.

## Structure
```
.
├── index.html
├── vercel.json
└── assets/
    ├── styles.css
    ├── script.js
    └── images/
        ├── fableborne-cover.jpg
        ├── og-image.jpg
        └── thumbs/        (19 video thumbnails)
```

## Deploy to Vercel

### Option A — drag & drop
1. Open https://vercel.com/new
2. Drag this whole folder into the upload area
3. Vercel auto-detects it as a static site → click **Deploy**

### Option B — Vercel CLI
```bash
npm i -g vercel
cd deploy
vercel        # preview
vercel --prod # production
```

### Option C — GitHub integration
1. Push this folder to a GitHub repo (e.g. `portfolio`)
2. On Vercel: **Add New → Project → Import Git Repository**
3. Framework preset: **Other** · Build command: *(leave empty)* · Output directory: `.`
4. Deploy

## Notes
- All paths are relative — works under any domain or subpath.
- Images are JPEG (cover ~100 KB, OG image ~78 KB, thumbs ~30–50 KB each).
- Fonts loaded from Google Fonts CDN (Instrument Serif, Geist, JetBrains Mono).
- Update the `og:url` and `canonical` in `index.html` once you know your final domain.
