const { Builder, By, Key, until } = require('selenium-webdriver')
const generalPage = require('../pageobjects/Page')

      const registerButton = '.register'
      const submitButton = '[type="submit"]'
      const loginField = 'user_login'
      const passField = 'user_password'
      const passConfirmField = 'user_password_confirmation'
      const fNameField = 'user_firstname'
      const lNameField = 'user_lastname'
      const mailField = 'user_mail'
      const customField = 'user_custom_field_values_3'
      const droodown = 'user_language'

  class RegisterPage {

    async userRegister() {
        await generalPage.clickElement(registerButton, 'css')
      }

    async regMessage () {
      return await generalPage.getText('flash_notice', 'id')
    }

    async inputField(login, pass, passConfirm, fName, lName, mail, customF, country) {
        await generalPage.fillField(loginField, 'id', login)
        await generalPage.fillField(passField, 'id', pass)
        await generalPage.fillField(passConfirmField, 'id', passConfirm)
        await generalPage.fillField(fNameField, 'id', fName)
        await generalPage.fillField(lNameField, 'id', lName)
        await generalPage.fillField(mailField, 'id', mail)
        await generalPage.fillField(customField, 'id', customF)
        await generalPage.clickElement(droodown, 'id')
        await generalPage.clickElement(country, 'css')
        await generalPage.clickElement(submitButton, 'css')
    }
  }
  module.exports = new RegisterPage()