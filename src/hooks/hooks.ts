import { CustomWorld } from './world';
import {Before,After,Status} from "@cucumber/cucumber";
import {chromium} from "@playwright/test";
//import {pageFixture} from "./pageFixture";

//let browser:Browser;

// Before(async function(){
//   browser=await chromium.launch({headless:false});
//   const context=await browser.newContext();
//   const page=await context.newPage;
// })

Before(async function(this:CustomWorld){
    this.browser=await chromium.launch({
        headless:false
    });

this.context=await this.browser.newContext();
this.page=await this.context.newPage();
});
// After(async function(){
//     await pageFixture.page.close();
//     await browser.close();
// })

After(async function(this: CustomWorld,{pickle,result}){
    console.log(result?.status);
    if(result?.status==Status.FAILED){
         console.log("After Hook");
    console.log("Status =", result?.status);
        const img = await this.page.screenshot({path: `./test-result/screenshots/${pickle.name}.png`,type:"png"})
         console.log("Screenshot taken");
        await this.attach(img,"img/png");
    }

    await this.page.close();
    await this.browser.close();
    await this.context.close();
})