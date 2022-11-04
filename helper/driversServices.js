let webdriver = require('selenium-webdriver')
let chrome = require('selenium-webdriver/chrome')
/* let firefox = require('selenium-webdriver/firefox')
let safari = require('selenium-webdriver/safari')
let opera = require('selenium-webdriver/opera')
let edge = require('selenium-webdriver/edge') */

exports.getDriverConfig = function(browser){
    if(browser in browsers){
        return browsers[browser].driverConfig()
    }
    else{
        throw new Error(`
            Browser not Supported.
            Make sure you wrote the name correctly.
        `);
    }
};

browsers = {
    headlessChrome: {
        driverConfig: function(){
            let options = new chrome.Options()
            options.addArguments('--lang=uk')
            options.addArguments("--headless")
            options.addArguments("--disable-gpu")
/*             options.addArguments("--incognito") */
            options.addArguments("--start-maximized")
            options.setChromeBinaryPath(require("puppeteer").executablePath())
            let driver = new webdriver.Builder().            
            forBrowser("chrome").setChromeOptions(options).
            build()
            
            return driver
        }
    },
    chrome: {
        driverConfig: function(){
            let options = new chrome.Options()
            options.addArguments('--lang=uk')
            options.addArguments("--incognito")
            options.addArguments("--start-maximized")
            let driver = new webdriver.Builder().            
            forBrowser("chrome").setChromeOptions(options).
            build()
            
            return driver
        }
    },
/*     
    firefox: {
        driverConfig: function(){
            let driver = new webdriver.Builder()
                .forBrowser('firefox')
                .build();

            return driver;
        }
    },
    opera: {
        driverConfig: function(){
            let service = new opera.ServiceBuilder()
                .loggingTo('/opera-logs.txt')
                .enableVerboseLogging()
                .build();
            
            let options = new opera.Options();
            options.setOperaBinaryPath = __dirname + '/drivers/operadriver.exe';

            let driver = opera.Driver.createSession(options, service);

            return driver;
        }
    },
    edge: {
        driverConfig: function(){
            let service = new edge.ServiceBuilder()
                .setPort(55555)
                .build();
       
            let options = new edge.Options();
        
            let driver = edge.Driver.createSession(options, service);

            return driver;
        }
    } */
};