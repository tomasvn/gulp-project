export default {
  'Index test' : function (browser) {
    browser
      .url('http://192.168.0.227:3000')
      .waitForElementVisible('body', 1000)
      .assert.containsText('h1', 'Hello There')
      .end();
  }
};
