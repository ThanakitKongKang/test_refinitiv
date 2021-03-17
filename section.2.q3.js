// execute command: node section.2.3.js B-INCOMESSF
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

(async () => {
    const param = process.argv[2];
    if (!param) {
        console.log("Fund name is required!")
        return 0;
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://codequiz.azurewebsites.net/');
    let content = await page.content();
    let $ = cheerio.load(content);
    const cookies = await page.cookies()

    if (cookies.length < 1) {
        await page.$eval('input[value="Accept"]', el => el.click());
        await page.goto('https://codequiz.azurewebsites.net/');
        content = await page.content();
        $ = cheerio.load(content);
    }

    const nav = $(`td:contains("${param}")`).next().text();
    nav ? console.log(nav) : console.log("Fund Name not found!")

    await browser.close();
})();