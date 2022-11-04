const { Builder, By, Key, until } = require('selenium-webdriver')
const generalPage = require('../pageobjects/Page')

//locators

const submitButton = '[type="submit"]'
const searchField = 'q'
const newsCheckbox = 'news'
const forumButton = '[href="/projects/redmine/boards"]'
const discussionBoards = '[href="/projects/redmine/boards/1"]'
const contributeTopics = '[href="/boards/1/topics/4325"]'
const searchResult = '.news > a'

class MainPage {

    async searchInput(value) {
      await generalPage.fillFieldEnter(searchField, 'id', value)
    }

    async newsCheck() {
      await generalPage.clickElement(newsCheckbox, 'id')
      await generalPage.clickElement(submitButton, 'css')
    }

    async searchMessage () {
      return await generalPage.getText(searchResult, 'css')
  }
    //Forum page
    async forumDiscussionContribute() {
      await generalPage.clickElement(forumButton, 'css')
      await generalPage.clickElement(discussionBoards, 'css')
      await generalPage.clickElement(contributeTopics, 'css')
    }
  }
  module.exports = new MainPage()