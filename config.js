const QmateService = require("@sap_oss/wdio-qmate-service");

exports.config = {
  logLevel: 'silent',
  logLevels: {
          webdriver: 'silent',
          webdriverio: 'silent'
  },
baseUrl: "https://us4.leverx.local:44302/sap/bc/ui2/flp",

specs: [
  // grouped
  [
    "./specs/myspec1.spec.js",
    "./specs/myspec2.spec.js"
  ]
  
],

params: {
  qmateCustomTimeout: 700000,
  import: {
      data: "./data/",
      purchaseOrder: "./data/purchaseOrder.json"
  },
  export: {
      purchaseOrder: "./data/purchaseOrder.json"
  }
},

maxInstances: 3,



    // ...
  services: [[QmateService], ['ChromeDriver']],
    // ...

    capabilities: [{
      // capabilities for local browser web tests
      browserName: "chrome", // or "firefox", "microsoftedge", "safari",
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
          args: [
              "--output=/dev/null",
              "--log-level=1",
              "--no-sandbox",
              "--incognito",
              "--ignore-certificate-errors",
              "--start-fullscreen",
              "--window-size=1920,1200",
              "--whitelisted-ips",
              "--disable-dev-shm-usage",
             "--headless",
              "--disable-gpu",
              "--disable-web-security",
              "--disable-infobars",
              "--disable-extensions",
              "--disable-logging",
              "--lang=en-US"
          ]
          
      
      }
}],




mochaOpts: {
  timeout: 120000,
  bail: true
},

};