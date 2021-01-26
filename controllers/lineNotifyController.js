const lineNotifyService = require('../models/lineNotify');

require('dotenv').config()

var token =  process.env.TOKEN_LINE_NOTIFY || null;

const lineNotifyController = (req, res) => {
  if ((token && req.body.message)) {
    lineNotifyService(token, req.body.message, res);
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