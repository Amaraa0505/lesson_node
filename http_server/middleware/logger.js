const {MyLog} = require("../myLog");

const logger = (req,res,next) => {
  const myLog = new MyLog();
  myLog.log("amaraa","error")
  next();
}

module.exports = {logger}