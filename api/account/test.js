import Router from 'koa-router'
const router = Router()
const IO = require('koa-socket-2')
const io = new IO()

router.post('/api/scoket', async (ctx, next) => {
  // io.on( 'info', async (ctx, data) => {
  //   ctx.socket.emit('response', {
  //     message: 'response message'
  //   })
  // })
  ctx.body = {
    success: true,
    data: 'test'
  }
})

export default router
