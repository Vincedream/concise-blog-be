const SubscribeModel = require("../../models/subscribe")

class SubscribeController {
  static getAllSubscAndSend(){
    const result = await SubscribeModel.find({}).exec()
    
    console.log(result)
  }
}

module.exports = SubscribeController
