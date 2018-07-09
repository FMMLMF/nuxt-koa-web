<template>
  <div id="normalCompany">
    <div class="breadcrumbOpt">
      <a class="breadcrumbLeft" href="/">首页</a>
      <a class="breadcrumbItem">信用企业还款</a>
    </div>
    <div class="tableMainHeader">
      <p class="lead"><em>信用企业还款（company huan qian）</em>信用企业还款的描述,信用企业还款的描述,信用企业还款的描述,信用企业还款的描述,信用企业还款的描述,信用企业还款的描述,信用企业还款的描述,信用企业还款的描述,信用企业还款的描述,</p>
    </div>
    <table-list ref="tableList" @searchPlanId='searchPlanId' showPlanIdSearch='true' @prev='prev' @next='next' @pageSizeChange='pageSizeChange' @filterChange="filterChange" :columns='columns' :tableData='tableData' @refresh='refresh' @repay='repay' refreshVisible='true' repayVisible='true'></table-list>
    <div class="tipsCon">
      <p class="tips">* 提示：映像标明为“未激活”，请自行购买 Windows 授权，常规渠道有<a>微软商店</a>或者<a>淘宝</a>。</p>
      <p class="tips">* 如果 Windows 映像标明为“未激活”，请自行购买 Windows 授权，常规渠道有<a>微软商店</a>或者<a>淘宝</a>。</p>
    </div>
  </div>
</template>
<script>
  /*eslint-disable*/
  import webHttp from '../plugins/axios'
  import tableList from '../components/tableList.vue'
  export default {
    layout: 'main',
    data() {
      return {
        columns: [
          {
            label: '',
            key: 'id',
            width: 47,
            type: 'radio',
            align: 'center'
          },
          {
            label: '还款计划ID',
            key: 'planId',
            width: 100
          },
          {
            label: '本金',
            key: 'repaymentCorpus',
            width: 120
          },
          {
            label: '本息合计',
            key: 'repaymentMonth',
            width: 120
          },
          {
            label: '状态',
            key: 'state',
            width: 120,
            dateFilters: [
              {text: '未还', value: '1'},
              {text: '还款中', value: '2'},
              {text: '已还', value: '3'},
              {text: '延期', value: '4'},
              {text: '垫资中', value: '5'},
              {text: '逾期', value: '6'},
              {text: '还垫中', value: '7'},
              {text: '还垫成功', value: '8'}
            ]
          },
          {
            label: '借款周期',
            key: 'loanPeriods',
            width: 100,
          },
          {
            label: '开始还款时间',
            key: 'startTime',
            type: 'normal',
            width: 120,
            renderHeader: this.startTimeRenderHeader
          },
          {
            label: '最后还款时间',
            key: 'endTime',
            type: 'normal',
            width: 120,
            renderHeader: this.endTimeRenderHeader
          }
        ],
        tableData: [
          {
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
            endTime: '2018-04-28',
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
          }
        ],
        startTimeValue: '',
        endTimeValue: '',
      }
    },
    components: {
      webHttp, tableList
    },
    mounted() {
    },
    methods: {
      refresh() {
        console.log('刷新')
        window.location.reload()
      },
      repay(id) {
        console.log('还款',id)
      },
      // more(id) {
        // @moreTap='more'
        //  moreVisible='true'
      //   console.log(id)
      // }
      // create() {
      //   console.log('新增')
      // },
      filterChange(key,value) {// key:columns定义的key,value:选中的value
        console.log(key,value)
      },
      prev(currentPage) {// 上一页
        console.log('上一页'+currentPage)
      },
      next(currentPage) {// 下一页
        console.log('下一页'+currentPage)
      },
      pageSizeChange(pageSize) {// 每页显示条数
        console.log('每页显示条数'+pageSize)
      },
      searchPlanId(planId) {
        console.log(planId)
      },
      startTimeRenderHeader(createElement, { column }) {// 开始日期筛选
        return createElement('el-popover',{
          attrs:{ value:this.visible,placement:'bottom-start'},
          on: {
            show() {
              $('.startDown').hide()
              $('.startUp').show()
            },
            hide() {
              $('.startDown').show()
              $('.startUp').hide()
            }
          }
        },[
          createElement('el-date-picker',{
            attrs: { value:this.startTimeValue,'value-format':"yyyy-MM-dd",type:"date",placeholder:"选择日期",clearable: false},
            on: {
              input:(value) => {
                this.startTimeValue = value
                setTimeout(() => {
                  $('body').click()
                }, 500)
                this.startTimePickerVal(this.startTimeValue,column.property)
              }
            }
          }),
          createElement('span',{
            slot: "reference"
          },[
            createElement('span', [column.label]),
            createElement('span',{
              class: 'el-table__column-filter-trigger'
            },[
              createElement('i',{
                class: 'el-icon-arrow-down dateSelectIcon startDown'
              }),
              createElement('i',{
                class: 'el-icon-arrow-up dateSelectIcon startUp'
              })
            ])
          ])
        ])
      },
      endTimeRenderHeader(createElement, { column }) {// 结束日期筛选
        return createElement('el-popover',{
          attrs:{ value:this.visible,placement:'bottom-start'},
          on: {
            show() {
              $('.endDown').hide()
              $('.endUp').show()
            },
            hide() {
              $('.endDown').show()
              $('.endUp').hide()
            }
          }
        },[
          createElement('el-date-picker',{
            attrs: { value:this.endTimeValue,'value-format':"yyyy-MM-dd",type:"date",placeholder:"选择日期",clearable: false},
            on: {
              input:(value) => {
                this.endTimeValue = value
                setTimeout(() => {
                  $('body').click()
                }, 500)
                this.endTimePickerVal(this.endTimeValue,column.property)
              }
            }
          }),
          createElement('span',{
            slot: "reference"
          },[
            createElement('span', [column.label]),
            createElement('span',{
              class: 'el-table__column-filter-trigger'
            },[
              createElement('i',{
                class: 'el-icon-arrow-down dateSelectIcon endDown'
              }),
              createElement('i',{
                class: 'el-icon-arrow-up dateSelectIcon endUp'
              })
            ])
          ])
        ])
      },
      startTimePickerVal(val,key) {// 开始日期回调(2018-05-15，startTime)
        console.log(val,key)
      },
      endTimePickerVal(val,key) {// 结束日期回调(2018-05-15，endTime)
        console.log(val,key)
      },
    }
  }
</script>
<style lang='less'>
  #normalCompany{
    width: 100%;
  }
</style>
