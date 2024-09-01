import chromedriver from "chromedriver";

export const globals = {
  /**
   * Start chromedriver before running tests
   * @param {function} done - callback when finished
   */
  before : function(done) {
    chromedriver.start();
    done();
  },

  /**
   * Kill chromedriver after running tests
   * @param {function} done - callback when finished
   */
  after : function(done) {
    chromedriver.stop();
    done();
  }
};
