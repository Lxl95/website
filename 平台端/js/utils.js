function Encrypt(word) {
  let key = 'abcdefghijklmnop';
  let iv = '1234567812345678';
  key = CryptoJS.enc.Utf8.parse(key);
  iv = CryptoJS.enc.Utf8.parse(iv);
  let srcs = CryptoJS.enc.Utf8.parse(word);
  // 加密模式为CBC，补码方式为PKCS5Padding（也就是PKCS7）
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
  });
  //返回base64
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}
function Decrypt(word) {
  let key = 'abcdefghijklmnop';
  let iv = '1234567812345678';
  key = CryptoJS.enc.Utf8.parse(key);
  iv = CryptoJS.enc.Utf8.parse(iv);
  let base64 = CryptoJS.enc.Base64.parse(word);
  let src = CryptoJS.enc.Base64.stringify(base64);

  // 解密模式为CBC，补码方式为PKCS5Padding（也就是PKCS7）
  let decrypt = CryptoJS.AES.decrypt(src, key, {
       iv: iv,
       mode: CryptoJS.mode.CBC,
       padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();

}
console.log(Encrypt('qaz123'))
console.log(Decrypt('Se+Dq+6gzN/+zIpa3jdOpw=='))
//设置cookie中的phone和openId
function setlocalStorage(stringName,value) {
  let seconds = 3600; //设置有效时间1个小时
  let expires = new Date(new Date() * 1 + seconds * 1000);
  return Cookies.set("website-" + stringName, value, {
    expires: expires
  });
}
//获取cookie中的phone
function getlocalStorage(stringName) {
  return Cookies.get("website-" + stringName);
}
//清空cookie中的phone
function removelocalStorage(stringName, stringName2) {
   if(stringName2) {
    Cookies.remove("website-" + stringName2);
   }
   return Cookies.remove("website-" + stringName);
}
function getNowTime() {
  const mydate = new Date();
  let year = mydate.getFullYear();
  let month = mydate.getMonth();
  let day = mydate.getDate();
  let hour = mydate.getHours();
  let minutes = mydate.getMinutes();
  let seconds = mydate.getSeconds();
  let milli = mydate.getMilliseconds();
  if (month < 10) {
    month = month - 0 + 1;
    month = "0" + month;
  } else {
    month = month - 0 + 1;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return year + month + day + hour + minutes + seconds + milli;
}