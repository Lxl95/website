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