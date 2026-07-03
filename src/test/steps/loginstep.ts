import {Given,When,Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import {CustomWorld} from "../../hooks/world";



Given('Users navigates to the application', async function (this:CustomWorld) {
   await this.page.goto("https://tutorialsninja.com/demo/");
});
Given('the User clicks My Account', async function (this:CustomWorld) {
   await this.page.locator("//span[text()='My Account']").click();
});


Given('User click on the login link', async function (this:CustomWorld) {
  await this.page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Login']").click();
});

Given('User enters the email in loginpage as {string}', async function (this:CustomWorld,email) {
   await this.page.locator("//input[@id='input-email']").fill(email);
});

// Given('User enters the password in loginpage as {string}', async function (this:CustomWorld,password1) {
// await this.page.locator("//input[@id='input-password']").fill(password1);
// });

Given('User enters the password in loginpage as {string}', async function (this: CustomWorld, password) {

    console.log("Password step started");

    const passwordBox = this.page.locator("#input-password");

    await expect(passwordBox).toBeVisible({ timeout: 10000 });

    console.log("Password textbox is visible");

    await passwordBox.fill(password);

    console.log("Password filled");
});
``

When('User click on the login button', async function (this:CustomWorld) {
    await this.page.locator('input.btn.btn-primary').click();
 
});

Then('Login should be successful', async function (this:CustomWorld) {
    await expect(this.page.locator('h2:has-text("My Account")')).toBeVisible();
    console.log("Login successful");
 
});

Then('Login should not  be successful', async function (this:CustomWorld) {
     const warning = this.page.locator(".alert.alert-danger");

    await expect(warning).toBeVisible({timeout:5000});

    await expect(warning).toContainText(
        "Warning: No match for E-Mail Address and/or Password.");

});
