# Andrei Cristea — Resume

The source of truth for my CV. The HTML in this repo is the master copy; the
PDF you probably want is attached to the latest [release](../../releases/latest).

## 📄 Get the PDF

Download the PDFs from the **[latest release](../../releases/latest)**:

- `Andrei-Cristea-Resume-EN.pdf` — English
- `Andrei-Cristea-Resume-RO.pdf` — Romanian

A new release is published automatically every time a change lands on `main`.

## ✏️ Editing the resume

The resume exists in two self-contained files styled for A4 print, sharing the
same design:

- [`index.html`](./index.html) — English
- [`index.ro.html`](./index.ro.html) — Romanian

The profile photo is [`assets/photo.jpg`](./assets/photo.jpg).

1. Edit the relevant file(s) — keep both languages in sync when changing content.
2. Open in a browser to preview.
3. Commit to `main` (directly or via a merged PR).

## 🤖 How releases work

On every push to `main`, [`.github/workflows/release.yml`](./.github/workflows/release.yml):

1. Renders `index.html` and `index.ro.html` to PDF with headless Chrome
   (Puppeteer), honoring the `@page` A4 layout — identical to Chrome's
   *Print to PDF*.
2. Tags the commit `vYYYY.MM.DD.<run-number>` (e.g. `v2026.06.26.1`).
3. Creates a GitHub Release with that tag and attaches both PDFs.

## 🛠️ Build the PDFs locally

```bash
npm install
node build-pdf.js Andrei-Cristea-Resume-EN.pdf index.html      # English
node build-pdf.js Andrei-Cristea-Resume-RO.pdf index.ro.html   # Romanian
```
