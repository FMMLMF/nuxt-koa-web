import jwt from 'jsonwebtoken'
const fs = require('fs')
const path = require('path')

module.exports = async (ctx, next) => {
  const auth = ctx.get('Authorization')
  const token = auth.split(' ')[1]
  const secret = fs.readFileSync(path.join(__dirname, '../../config/secret.pem'))
  try {
    // 解码取出之前存在payload的user_id 和 name
    const payload = jwt.verify(token, secret)
    ctx.user_id = payload.id
    ctx.name = payload.name
    await next()
  } catch (err) {
    ctx.throw(401, err)
  }
}
