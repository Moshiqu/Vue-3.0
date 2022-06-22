import Puppeteer from "puppeteer";

const sleep = (time:number)=>{
    return  new Promise((resolve,reject)=>{
        setTimeout(resolve, time);
    })
}

(async()=>{
    const browser = await Puppeteer.launch({
        headless:false,
        defaultViewport:null,
        args:['--start-maximized']
    })

    const page = await browser.newPage() // 打开新标签

    await page.goto('https://www.jd.com') // 跳转页面

    await page.focus('#key') // 输入框聚焦, #key为input搜索框的id

    await page.keyboard.sendCharacter('iphone13') // 输入框输入iphone13

    await page.click('.button') // 点击搜索按钮

    await page.waitForSelector('.gl-item')

    let isScroll = true
    let step = 500

    while(isScroll){
        isScroll = await page.evaluate((step)=>{
            let scrollTop = document.scrollingElement?.scrollTop ?? 0
            document.scrollingElement!.scrollTop = scrollTop + step
            return document.body.clientHeight > scrollTop +1080 ? true:false
        },step)

        await sleep(500)
    }

    await page.screenshot({
        path:'iphone13.png',
        fullPage:true
    })

})()