require('dotenv').config()
let webdriver = require('selenium-webdriver')
let chrome = require('selenium-webdriver/chrome')
/* let firefox = require('selenium-webdriver/firefox')
let safari = require('selenium-webdriver/safari')
let opera = require('selenium-webdriver/opera')
let edge = require('selenium-webdriver/edge') */
let {setBrowserService, getDriverConfig} = require('./../helper/driversServices')
let path = require('path')
let addToPath = require('add-to-path')

addToPath([__dirname + '\\drivers'])

let browser = process.env.MOCHA_BROWSER || 'headlessChrome'

driver = getDriverConfig(browser)

exports.driver = driver

exports.base_url = process.env.TEST_BASE_URL || 'https://www.redmine.org/'