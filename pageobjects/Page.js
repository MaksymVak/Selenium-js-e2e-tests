const { Builder, By, Key, until } = require('selenium-webdriver')
let {driver, base_url} = require('../config/selenium.config.js')


class GeneralPage {

    constructor(method){
        this.method = method ? method : 'css'
    }
    changeMethod(method){
        this.method = newMethod
    }
    async findElement(query, method){
        let methodToUse = method ? method : this.method
        let element = await driver.findElement(
            By[methodToUse](query)
        )
        return await element
    }
    async findElements(query, method){
        let methodToUse = method ? method : this.method
        return await driver.findElements(
            By[methodToUse](query)
        )
    }

    async quit (){
        await driver.quit()
    }

    async getTitle (){
        return await driver.getTitle()
    }

    async visit(base_url) {
        await driver.get(base_url)
    }

    async getElement(query, method) {
        return await driver.findElement(query, method)
    }
    async fillField (query, method, value) {
        let element = await this.findElement(query, method)
        return await element.sendKeys(value)
    }

    async fillFieldEnter (query, method, value) {
        let element = await this.findElement(query, method)
        return await element.sendKeys(value + Key.ENTER)
    }

    async clickElement(query, method){
        let element = await this.findElement(query, method)
        await element.click()
    }
    async getText(query, method){
        let element = await this.findElement(query, method)
        return await element.getText()
    }
}
module.exports = new GeneralPage()