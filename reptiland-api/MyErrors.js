class MyError extends Error {
    constructor(message, code) {
      super(message);
      this.code = code;
    }
  }
  
module.exports = { MyError };