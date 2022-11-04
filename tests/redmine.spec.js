let {driver, base_url} = require('../config/selenium.config.js')
const randomData = require("../helper/randomdata")
const mainPage = require('../pageobjects/main.page')
const authorizatPage = require('../pageobjects/author.page')
const generalPage = require('../pageobjects/Page')
const registerPage = require('../pageobjects/register.page')
const expect = require ('chai').expect

describe('test', function() {
  this.timeout(30000)

  beforeEach(async function() {
    await generalPage.visit(base_url)
  })

  after(async function() {
    await generalPage.quit()
  })

it('TC-01 - Registration on the website Redmine.com', async () => {
  await registerPage.userRegister()
  await registerPage.inputField(randomData.randomstring(10), "password-invalide", "password-invalide", randomData.randomstring(10), randomData.randomstring(10), randomData.makeEmail(), randomData.randomstring(10), '[value="uk"]')
  expect(await registerPage.regMessage()).contains("Обліковий")
})

it('TC-02 - Authorization on the website Redmine.com', async () => {
  await authorizatPage.userAuthorizat()
  await authorizatPage.authorInputField(randomData.randomstring(10), randomData.randomstring(10))
  expect(await authorizatPage.autorMessage()).to.include('Неправильне')

})

it('TC-03 - Password recovery', async () => {
  await authorizatPage.userAuthorizat()
  await authorizatPage.lostPassword(randomData.makeEmail())
  expect(await authorizatPage.autorMessage()).to.include('Невідомий')
})

it('TC-04 - Testing the search', async () => {
  await mainPage.searchInput("Redmine")
  await mainPage.newsCheck()
  expect(await mainPage.searchMessage()).to.include(['Redmine'])
})

it('TC-05 - Checking the forum', async () => {
  await mainPage.forumDiscussionContribute()
  expect(await generalPage.getTitle()).contains("How to contribute - Redmine")
})
})