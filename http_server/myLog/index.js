const fs = require("fs");
//object oriented programming
exports.MyLog = class MyLog {
  constructor() {
    this.amraa = "";
  }

  log(message, level = "success") {
    //null coelesing
    console.log("L", level);
    switch (level) {
      case "info": {
        fs.appendFileSync("info.log", message);
        break;
      }
      case "error": {
        fs.appendFileSync("error.log", message);
        break;
      }
      case "success": {
        fs.appendFileSync("success.log", message);
        break;
      }
      default: {
      }
    }
  }
};
