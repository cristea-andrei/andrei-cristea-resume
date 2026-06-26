# Andrei Cristea — Resume

The source of truth for my CV. The HTML in this repo is the master copy; the
PDF you probably want is attached to the latest [release](../../releases/latest).

## 📄 Get the PDF

Download `Andrei-Cristea-Resume.pdf` from the
**[latest release](../../releases/latest)**. A new release is published
automatically every time a change lands on `main`.

## ✏️ Editing the resume

Everything lives in [`index.html`](./index.html) — a single, self-contained
file styled for A4 print. The profile photo is [`assets/photo.jpg`](./assets/photo.jpg).

1. Edit `index.html` (and/or swap `assets/photo.jpg`).
2. Open it in a browser to preview.
3. Commit to `main` (directly or via a merged PR).

## 🤖 How releases work

On every push to `main`, [`.github/workflows/release.yml`](./.github/workflows/release.yml):

1. Renders `index.html` to PDF with headless Chrome (Puppeteer), honoring the
   `@page` A4 layout — identical to Chrome's *Print to PDF*.
2. Tags the commit `vYYYY.MM.DD.<run-number>` (e.g. `v2026.06.26.1`).
3. Creates a GitHub Release with that tag and attaches the PDF.

## 🛠️ Build the PDF locally

```bash
npm install
npm run build      # writes Andrei-Cristea-Resume.pdf
```
