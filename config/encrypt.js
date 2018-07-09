import aesjs from 'aes-js'

let key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let iv = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

let AES = {
  encode(data) {
    let dataBytes = aesjs.utils.utf8.toBytes(data)
    let aesOfb = new aesjs.ModeOfOperation.ofb(key, iv)
    let encryptedBytes = aesOfb.encrypt(dataBytes)
    return aesjs.utils.hex.fromBytes(encryptedBytes)
  },
  decode(data) {
    let encryptedBytes = aesjs.utils.hex.toBytes(data)
    let aesOfb = new aesjs.ModeOfOperation.ofb(key, iv)
    let decryptedBytes = aesOfb.decrypt(encryptedBytes)
    return aesjs.utils.utf8.fromBytes(decryptedBytes)
  }
}

export default AES
