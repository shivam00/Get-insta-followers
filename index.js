const puppeteer = require('puppeteer');
const url= "https:instagram.com/shivam_gupta13aug/";

const automate = async () => {
    const browser = await puppeteer.launch({ 
        headless: true,
        args: [
          `--window-size=${ 1024 },${ 700 }`
      ],
    });
    const page = await browser.newPage();
    await page.setViewport({ width:1224, height: 700 })
    await page.goto(url);
    await page.waitFor(5000);
    

    const searchValue = await page.$eval('#react-root > section > main > div > header > section > ul > li:nth-child(2) > a > span', el => el.innerHTML);
console.log(searchValue);
await browser.close();
}

automate();

