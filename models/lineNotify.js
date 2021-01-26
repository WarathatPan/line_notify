const request = require('request')

function lineNotifyService(token, message, res) {
  request({
    method: 'POST',
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      'bearer': token
    },
    form: {
      message: message
    }
  }, (err, httpResponse, body) => {
    if (err) {
      res.status(400).json(err);
    } else {
      const messageJson = {
        statusCode: httpResponse.statusCode,
        body: body,
      };
      res.status(200).json(messageJson);
    }
  });
}

module.exports = lineNotifyService;
