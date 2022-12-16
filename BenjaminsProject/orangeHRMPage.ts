import { BasePage } from "./basePage";
import {By, until, WebDriver} from 'selenium-webdriver'

export class Orange extends BasePage {

    Username: By = By.xpath('//input[@name="username"]')
    Password: By = By.xpath('//input[@type="password"]')
    loginBtn: By = By.xpath('//button[@type="submit"]')
    forgotPassWord: By = By.xpath('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]')
    usernameforForgot: By = By.xpath('//input[@name="username"]')
    TimeCardBtn: By = By.xpath('//button[@class="oxd-icon-button oxd-icon-button--solid-main orangehrm-attendance-card-action"]')
    punchInBtn: By = By.xpath('//button[@type="submit"]')
    punchOutBtn: By = By.xpath('//button[@type="submit"]')
    PIMBtn: By = By.xpath('//a[@class="oxd-main-menu-item active"]')
    firstName: By = By.xpath('//input[@name="firstName"]')
    lastName: By = By.xpath('//input[@name="lastName"]')
    saveBtn: By = By.xpath('//button[@type="submit"]')
    myInfoBtn: By = By.xpath('//a[@class="oxd-main-menu-item active"]')
    myFirstName: By = By.xpath('//input[@name="firstName"]')
    myLastName: By = By.xpath('//input[@name="lastName"]')
    myNickName: By = By.xpath('(//input[@class="oxd-input oxd-input--active"])[2]')
    myNationality: By = By.xpath('(//div[@class="oxd-select-text oxd-select-text--active"])[1]')
    myMaritalStatus: By = By.xpath('(//div[@class="oxd-select-text oxd-select-text--active"])[2]')
    myBloodType: By = By.xpath('(//div[@class="oxd-select-text oxd-select-text--active"])[3]')
    mySmoker: By = By.xpath('(//i[@class="oxd-icon bi-check oxd-checkbox-input-icon"])[1]')
    myMilitaryService: By = By.xpath('(//input[@class="oxd-input oxd-input--active"])[10]')
    mySaveBtn1: By = By.xpath('(//button[@type="submit"]) [1]')
    mySaveBtn2: By = By.xpath('(//button[@type="submit"]) [2]')

    constructor() {
        super({url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"});
    }

    async login() {
        await this.setInput(this.Username, `${"Admin"}`);
        await this.setInput(this.Password, `${"admin123"}`);
        await this.click(this.loginBtn);
        await this.driver.wait(until.elementsLocated(this.punchInBtn));
    }

}