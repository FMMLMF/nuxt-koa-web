import Router from 'koa-router'
const verify = require('../../middleware/auth/index')

const router = Router()

router.post('/api/normalCompany/list', verify, async (ctx, next) => {
  ctx.body = {
    success: true,
    data: [{
      planId: '1111111',
      repaymentCorpus: '88888888',
      repaymentMonth: '99999999',
      state: '还款中',
      loanPeriods: '12',
      startTime: '2018-04-25',
      endTime: '2018-04-26'
    }, {
      planId: '222222222',
      repaymentCorpus: '88888888',
      repaymentMonth: '99999999',
      state: '还款完成',
      loanPeriods: '6',
      startTime: '2018-04-26',
      endTime: '2018-04-27'
    }, {
      planId: '33333333',
      repaymentCorpus: '88888888',
      repaymentMonth: '99999999',
      state: '',
      loanPeriods: '12',
      startTime: '2018-04-27',
      endTime: '2018-04-28'
    }, {
      planId: '444444444',
      repaymentCorpus: '88888888',
      repaymentMonth: '99999999',
      state: '还款完成',
      loanPeriods: '18',
      startTime: '2018-04-28',
      endTime: '2018-04-29'
    }, {
      planId: '5555555555',
      repaymentCorpus: '88888888',
      repaymentMonth: '99999999',
      state: '',
      loanPeriods: '18',
      startTime: '2018-04-29',
      endTime: '2018-04-30'
    }, {
      planId: '666666666',
      repaymentCorpus: '88888888',
      repaymentMonth: '99999999',
      state: '还款完成',
      loanPeriods: '12',
      startTime: '2018-04-30',
      endTime: '2018-05-01'
    }]
  }
})

export default router
