var express = require('express');
var router  = express.Router();
const request = require('request');

router.get('/', (req, res) => {
  const qrApi = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example';

  request({ url: qrApi, encoding: null }, (err, response, body) => {
    if (err || response.statusCode !== 200) {
      return res.status(500).send('QRコード生成エラー');
    }
    // バイナリまま返す
    res.type('png');
    res.send(body);
  });
});

module.exports = router;
