import chromedriver from "chromedriver";

export default {
  /**
   * Starts chromedriver before running tests
   * @param {function} done - callback to signal that the task is done
   */
  before : function(done) {
    chromedriver.start();
    done();
  },

  /**
   * Stops chromedriver after running tests
   * @param {function} done - callback to signal that the task is done
   */
  after : function(done) {
    chromedriver.stop();
    done();
  }
};
