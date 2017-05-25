
var moment = require('moment');
var crypto = require('crypto');
var request = require('request');
//var dateFormat = require('dateformat');
//---------------------------------

var bucket = ''
var password = '';
var operator = '';

//----------------------------------
var uri = '/' + bucket + '/aaa.png';
var url = 'http://v0.api.upyun.com' + uri;
var gmdate = moment.utc().format("ddd, DD MMM YYYY HH:mm:ss [GMT]");
//var gmdate = dateFormat(new Date().getTime(),"GMT:ddd, dd mmm yyyy HH:MM:ss") + " GMT";

// 计算Passwor的MD5值
function crypto_md5(password){
  var md5 = crypto.createHash('md5');
  return md5.update(password).digest('hex');
};

//计算signature
/* HMAC-SHA1 (<Password>,
<Method>&
<URI>&
<Date>&
<Content-MD5>
)
*/
function sha1(key, data){
  var signature = crypto.createHmac('sha1', crypto_md5(key)).update(data).digest('base64');
  return signature;
};

//计算签名的字符串拼接
/*Method>&
<URI>&
<Date>&
<Content-MD5>
*/
function getSignature(gmdate){
  var date = 'PUT' + '&' + uri + '&' + gmdate;
  return date;
};


request({
    uri: url,
    method: "PUT",
    headers:{
        'Date':gmdate,
        'User-Agent':'cxiang',
        'Authorization': "UPYUN " + operator + ":" + sha1(password, getSignature(gmdate))
    },
  },function(error, response, body) {
    if (!error && response.statusCode == 200) {
       console.log(response.statusCode);
       console.log(response.headers);
      } else {
        console.log(response.headers);
        console.log(body);
    }
});
