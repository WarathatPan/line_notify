const lineNotifyService = require('../models/lineNotify');

require('dotenv').config()

var token =  process.env.TOKEN_LINE_NOTIFY || null;

const lineNotifyController = async (req, res) => {
  if ((token && req.body.message)) {
    const result = await lineNotifyService(token, req.body.message);
    if (result.statusCode == 200) {
      res.status(200).json(result)
    } else {
      res.status(400).json(result)
    }
  } else if (!token && req.body.message) {
    res.status(400).json({
      message: 'Input token not found value.',
    });
  } else if (token && !req.body.message) {
    res.status(400).json({
      message: 'Input message not found value.',
    });
  } else {
    res.status(400).json({
      message: 'Input token and message not found value.',
    });
  }
}

module.exports = lineNotifyController;