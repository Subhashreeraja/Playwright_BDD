import {Given,When,Then} from "@cucumber/cucumber";

import {expect} from "@playwright/test";

//import {pageFixture} from "../hooks/pageFixture";
import {CustomWorld} from "../../hooks/world";
//let browser:Browser;
//let page:Page;
Given('User navigates to the application', async function (this:CustomWorld) {
 // browser=await chromium.launch({headless:false});
  //page=await browser.newPage();
 // await pageFixture.page.goto("https://tutorialsninja.com/demo/");
 await this.page.goto("https://tutorialsninja.com/demo/");
});

Given('User click on the myAccount link', async function (this:CustomWorld) {
  await this.page.locator("a[title='My Account']").click();
});

Given('User click on the Register link', async function (this:CustomWorld) {
  await this.page.getByRole('link', { name: 'Register' }).click();
});

Given('User enters the firstname as {string}', async function (this:CustomWorld,firstname) {
 await this.page.getByPlaceholder('First Name').fill(firstname);
  
});

Given('User enters the lastname as {string}', async function (this:CustomWorld,lastname) {
   await this.page.getByPlaceholder('Last Name').fill(lastname);
});

Given('User enters the email as {string}', async function (this:CustomWorld,email) {
  await this.page.getByPlaceholder('E-Mail').fill(email);
  
});


Given('User enters the telephone as {string}', async function (this:CustomWorld,telephone) {
   await this.page.getByPlaceholder('Telephone').fill(telephone);
});

Given('User enters the password as {string}', async function (this:CustomWorld,password) {
  await  this.page.getByRole('textbox', { name: '* Password', exact: true }).fill(password);
});

Given('User enters the confirmPassword as {string}', async function (this:CustomWorld,confirmPassword) {
 await  this.page.getByRole('textbox', { name: '* Password Confirm' }).fill(confirmPassword);
});

When('User click the policycheckbox', async function (this:CustomWorld) {
 await  this.page.getByRole('checkbox').click();
});

When('User click on the register button', async function (this:CustomWorld) {
  await this.page.getByRole('button', { name: 'Continue' }).click();
});

Then('Register should be successful', async function (this:CustomWorld) {
 const  successmsg=this.page.locator("//h1[normalize-space()='Your Account Has Been Created!']")
 await expect(successmsg).toBeVisible();
 console.log("Register should  be successful");
});

Then('Register should  not be successful', async function (this:CustomWorld) {
  const invalidemailmsg=this.page.getByText('E-Mail Address does not appear to be valid!');
  await expect(invalidemailmsg).toBeVisible();
  console.log("Register should  not be successful");
});


