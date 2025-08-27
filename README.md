# The Three Plays — Static Landing Page

A fast, clean landing page for **The Three Plays** (college football in 3 decisive moments).  
Built to deploy on **GitHub Pages** (or any static host).

## Features
- Sleek white background, grey typography, red highlights
- Responsive layout (mobile menu + grid)
- Hero with CTA + sample breakdown card
- Sections: How it works, Features, Latest, Subscribe
- YouTube embed placeholder
- AdSense placeholder (commented) ready to paste when approved
- Lightweight (vanilla HTML/CSS), Google Fonts (Inter)

## Quick Start
1. Copy this folder into a new GitHub repo (e.g. `the-three-plays-site`).
2. In GitHub → **Settings → Pages**, set Source to your `main` branch.
3. Visit the Pages URL (or connect your custom domain).
4. Replace the sample text and YouTube `iframe` with your content.

## Custom Domain (GitHub Pages)
- Add a `CNAME` file with your domain (e.g. `thethreeplays.com`) or set it in Settings → Pages.
- Point your DNS: `CNAME` → `YOUR-USERNAME.github.io` (apex `A` records if needed).
- Enable HTTPS in GitHub Pages settings.

## AdSense
Once approved, paste your client script into `<head>` of `index.html` (search for `AdSense` in file).  
Then insert ad units where you want them, or use auto-ads.

## Color Tokens
- Background: `#ffffff`
- Text: `#3a3a3a`
- Muted: `#6b7280`
- Lines: `#e5e7eb`
- Red highlight: `#d61f1f`

## License
MIT — do whatever you want, just don't sue me.
