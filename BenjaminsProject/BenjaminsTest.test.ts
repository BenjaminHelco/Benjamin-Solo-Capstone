import { Orange } from "./orangeHRMPage";

const orange = new Orange()


describe("Test suite for OrangeHRM", () => {
    beforeEach( async () => {
        await orange.driver.navigate();
    })

    afterAll(async () => {
        await orange.driver.quit()
    })

    test("Logging In", async () => {
        await orange.login()
    })
})