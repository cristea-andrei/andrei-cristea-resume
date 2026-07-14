// Renders index.html to a print-quality A4 PDF using headless Chrome.
// Args: [output.pdf] [input.html] — both optional.
const puppeteer = require('puppeteer');
const path = require('path');

const OUT = process.argv[2] || 'Andrei-Cristea-Resume.pdf';
const HTML = path.resolve(__dirname, process.argv[3] || 'index.html');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    // file:// load lets relative asset paths (assets/photo.jpg) resolve.
    await page.goto('file://' + HTML, { waitUntil: 'networkidle0' });
    // Make sure webfonts (if any) are fully loaded before printing.
    await page.evaluateHandle('document.fonts.ready');
    await page.pdf({
      path: OUT,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true, // honor the @page rule in the resume's CSS
    });
    console.log('Wrote ' + OUT);
  } finally {
    await browser.close();
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
