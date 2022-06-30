const puppeteer = require("puppeteer");

(async () => {
	const url =
		"https://www.google.com/search?client=safari&rls=en&q=apple+stock+price&ie=UTF-8&oe=UTF-8";
        // "https://harshalgajjar.com";
        const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
	await page.setViewport({
		width: 1920,
		height: 1080,
		deviceScaleFactor: 1,
	});
	await page.goto(url);
	// await page.screenshot({ path: "screenshot.png" });

    element = await page.waitForSelector("#knowledge-finance-wholepage__entity-summary > div.aviV4d > g-card-section > div > g-card-section > div.wGt0Bc > div.PZPZlf > span:nth-child(1) > span > span.IsqQVc.NprOob.wT3VGc", {timeout: 30000});
    title = await page.evaluate(element => element.textContent, element);

    console.log(title)

    // await page.$('').then(elem=>
    //     console.log(elem)
    // )

    // console.log(xpathcontent)

	await browser.close();
})();
