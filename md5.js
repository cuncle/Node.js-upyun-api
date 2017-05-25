var crypto = require('crypto');
var md5 = crypto.createHash('md5');

function crypto_md5(password){
  //return md5.update(password).digest('hex');
  return md5.update(password).digest('Base64');
}

var password = 'testupyun';
console.log( crypto_md5(password) );
