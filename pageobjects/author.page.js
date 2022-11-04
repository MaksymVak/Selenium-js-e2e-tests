const { Builder, By, Key, until } = require('selenium-webdriver')
const generalPage = require('../pageobjects/Page')

//locators
const submitButton = '[type="submit"]'
const authorizatButton = '.login'
const usernameField = 'username'
const passField = 'password'
const loginSelec = 'autologin'
const lostPass = '[href="/account/lost_password"]'
const lostEmail = 'mail'
const locatorAutorMessage = 'flash_error'

class AuthorizatPage {

    async userAuthorizat() {
        await generalPage.clickElement(authorizatButton, 'css')
    }

    async autorMessage () {
        return await generalPage.getText(locatorAutorMessage, 'id')
    }

    async authorInputField(username, password) {
        await generalPage.fillField(usernameField, 'id', username)
        await generalPage.fillField(passField, 'id', password)
        await generalPage.clickElement(loginSelec, 'id')
        await generalPage.clickElement(submitButton, 'css')
    }
    async lostPassword(value) {
        await generalPage.clickElement(lostPass, 'css')
        await generalPage.fillField(lostEmail, 'id', value)
        await generalPage.clickElement(submitButton, 'css')
    }
}
module.exports = new AuthorizatPage()