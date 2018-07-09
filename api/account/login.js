import Router from 'koa-router'
// import { Base64 } from 'js-base64'
// import jwt from 'jsonwebtoken'
// const fs = require('fs')
// const path = require('path')
// const verify = require('../../middleware/auth/index')

const router = Router()

router.post('/api/login', async (ctx, next) => {
  ctx.body = {
    success: true,
    data: 'test'
  }
})

// router.post('/api/login', verify, async (ctx, next) => {
//   const header = {
//     'alg': 'HS256',
//     'typ': 'JWT'
//   }
//   const payload = {
//     'ticket': '12345'
//   }
//   const secretKey = fs.readFileSync(path.join(__dirname, '../../config/secret.pem'))
//   const encodedString = Base64.encode(JSON.stringify(header)) + '.' + Base64.encode(JSON.stringify(payload))
//   const signature = jwt.sign(encodedString, secretKey)
//   jwt.verify(signature, secretKey, (err, decoded) => {
//     if (!err) {
//       console.log(decoded)
//     }
//   })
//   ctx.body = {
//     success: true,
//     data: 'test'
//   }
// })

export default router
