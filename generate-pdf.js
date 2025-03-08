import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import path from "path";

// Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set viewport size to match A4 dimensions
    await page.setViewport({ width: 794, height: 1123 });

    // Load the HTML file
    await page.goto(`file://${__dirname}/resume.html`, { waitUntil: "networkidle0" });

    // Generate PDF with proper scaling
    await page.pdf({
        path: "resume.pdf",
        format: "A4",
        printBackground: true,
        margin: { top: "5mm", right: "10mm", bottom: "5mm", left: "10mm" },  // Reduce margins
        scale: 0.85,  // Scale down content to fit in one page
    });

    await browser.close();
    console.log("📄 PDF generated successfully and now fits one page!");
})();
