const Puppeteer=require('puppeteer')
const asset=require("assert")



try{
    (async()=>{
        const browser=await Puppeteer.launch({headless:true})
        const page =await browser.newPage()
        await page.goto('https://www.apple.com')

        const searchInput=await page.$('#twotabsearchtextbox')
        await searchInput.type('Testing Book')

        const searchBtn=await page.$('submit')
        await searchBtn.click()

        await page.waitForTimeout(2000)

        const pageTitle= await page.title()

        assert(pageTitle=='BMI Calculator')
        console.log('Title matched successfully')

        await browser.close()
    }
    
    )();

}catch(err){
    console.error(err)
}