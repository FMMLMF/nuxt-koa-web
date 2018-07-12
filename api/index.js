import Router from 'koa-router'

// account api
import login from './account/login'

// list
import normalCompanyList from './list/normalCompany'

const router = Router()

// account routes
router.use(login.routes(), login.allowedMethods())
router.use(normalCompanyList.routes(), normalCompanyList.allowedMethods())

export default router
