import Router from 'koa-router'

// account api
import login from './account/login'
import test from './account/test'

const router = Router()

// account routes
router.use(login.routes(), login.allowedMethods())
router.use(test.routes(), test.allowedMethods())

export default router
