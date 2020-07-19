# Puppeteer take screenshot of webpage

	const puppeteer = require("puppeteer")

	(async () => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		await page.goto("https://bartol.dev")
		await page.screenshot({ path: "webpage.png" })

		await browser.close()
	})();
