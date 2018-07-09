import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import bodyParser from 'koa-bodyparser'

// log middleware
const miLog = require('../mi-log/logger')
const ip = require('ip')
// socket
const IO = require('koa-socket-2')
const io = new IO()

import routes from '../api'

async function start () {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000

  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // 将配置中间件的参数在注册中间件时作为参数传入
  app.use(miLog({
    env: app.env,  // koa 提供的环境变量
    projectName: 'walrus-middle-node',
    appLogLevel: 'debug',
    dir: 'logs',
    serverIp: ip.address()
  }))

  // socket
  io.attach(app)

  app.use(bodyParser())

  // routes
  app.use(routes.routes(), routes.allowedMethods())

  app.use(async (ctx, next) => {
    await next()
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
