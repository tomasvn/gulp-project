module.exports = {
  'Form test' : function (browser) {
    browser
      .url('http://localhost:3000/src/form.html')
      .waitForElementVisible('body', 1000)
      .setValue('input[name=username]', 'nightwatch')
      .setValue('input[name=password]', 'nightwatch')
      .click('button')
      .assert.urlContains('username=nightwatch&password=nightwatch')
      .end();
  }
};
