<template>
  <div id="normalCompany">
    <div class="breadcrumbOpt">
      <a class="breadcrumbLeft" href="/">首页</a>
      <a class="breadcrumbItem">商户账户列表</a>
    </div>
    <div class="tableMainHeader">
      <p class="lead"><em>商户账户列表（account huan kuan）</em>商户账户列表的描述商户账户列表的描述,商户账户列表的描述,商户账户列表的描述,商户账户列表的描述,商户账户列表的描述,商户账户列表的描述,,</p>
    </div>
    <table-list ref="tableList" @prev='prev' @next='next' @pageSizeChange='pageSizeChange' @filterChange="filterChange" :columns='columns' :tableData='tableData' @refresh='refresh' refreshVisible='true'></table-list>
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
            type: 'index',
            align: 'center',
            width: 50
          },
          {
            label: '账户号',
            key: 'oid_acctno',
            width: 200
          },
          {
            label: '账户类型',
            key: 'acct_type',
            width: 150
          },
          {
            label: '资金金额',
            key: "amt_balcur",
            width: 100
          },
          {
            label: '可用金额',
            key: 'amt_balaval',
            width: 100,
          },
          {
            label: '冻结金额',
            key: 'amt_balfrz',
            width: 100,
          },
          {
            label: '账户开户日期',
            key: 'date_open',
            width: 180,
          },
          {
            label: '更新时间',
            key: 'up_date',
            width: 180,
          },
          {
            label: '备注',
            key: 'memo',
            width: 100,
          },
          {
            label: "账户状态",
            key: "acct_state",
            width: 100,
          }
        ],
        tableData: [
          {
            oid_acctno: '13102811199999999966',
            acct_type: '会员',
            amt_balcur: '99999',
            amt_balaval: '88888',
            amt_balfrz: '11111',
            date_open: '2018-04-25',
            up_date: '2018-04-25',
            memo: '没有备注',
            repayNum: '12',
            acct_state: '正常'
          },
          {
            oid_acctno: '13102811199999999966',
            acct_type: '不是会员',
            amt_balcur: '99999',
            amt_balaval: '88888',
            amt_balfrz: '11111',
            date_open: '2018-04-25',
            up_date: '2018-04-25',
            memo: '没有备注',
            repayNum: '12',
            acct_state: '注销'
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
      searchPhone(phone) {
        console.log(phone)
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
