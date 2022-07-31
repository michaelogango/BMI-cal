const Puppeteer=require('puppeteer')
const asset=require("assert")



try{
    (async()=>{
        const browser=await Puppeteer.launch({headless:true})
        const page =await browser.newPage()
        await page.goto('https://bmi-calculator-react-project.herokuapp.com')

        await page.screenshot({path: 'example.png'});

        // const searchInput=await page.$('#twotabsearchtextbox')
        // await searchInput.type('Testing Book')

        const pageTitle= await page.title()

        assert(pageTitle=='Heroku | Welcome to your new app!')
        console.log('Title matched successfully')

        const searchBtn=await page.$('Reload')
        await searchBtn.click()

        await page.waitForTimeout(2000)

        
        await browser.close()
    }
    
    )();

}catch(err){
    console.error(err)
}