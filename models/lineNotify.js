const request = require('request')

function lineNotifyService(token, message) {
  return new Promise(function (resolve, reject) {
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
    }, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        const messageJson = {
          statusCode: res.statusCode,
          body: body,
        };
        resolve(messageJson);
      } else {
        const messageJson = {
          statusCode: res.statusCode,
          err: err,
        };
        reject(messageJson);
      }
    });
  });
}

module.exports = lineNotifyService;
