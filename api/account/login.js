import Router from 'koa-router'
import { Base64 } from 'js-base64'
import jwt from 'jsonwebtoken'
const fs = require('fs')
const path = require('path')

const router = Router()

router.post('/api/login', async (ctx, next) => {
  const header = {
    'alg': 'HS256',
    'typ': 'JWT'
  }
  const payload = {
    'ticket': '12345'
  }
  const secretKey = fs.readFileSync(path.join(__dirname, '../../config/secret.pem'))
  const encodedString = Base64.encode(JSON.stringify(header)) + '.' + Base64.encode(JSON.stringify(payload))
  const signature = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + 15 * 60,   // expires 15 minutes
    data: encodedString
  }, secretKey)
  ctx.body = {
    success: true,
    data: signature
  }
})

export default router
