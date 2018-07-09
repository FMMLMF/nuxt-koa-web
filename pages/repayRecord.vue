<template>
  <div id="normalCompany">
    <div class="breadcrumbOpt">
      <a class="breadcrumbLeft" href="/">首页</a>
      <a class="breadcrumbItem"> 用户还款记录</a>
    </div>
    <div class="tableMainHeader">
      <p class="lead"><em>用户还款记录（account huan kuan）</em>用户还款记录的描述,用户还款记录的描述,用户还款记录的描述,用户还款记录的描述,用户还款记录的描述,用户还款记录的描述,用户还款记录的描述,用户还款记录的描述,</p>
    </div>
    <table-list ref="tableList" @searchPhone='searchPhone' show-phone-search='true' @prev='prev' @next='next' @pageSizeChange='pageSizeChange' @filterChange="filterChange" :columns='columns' :tableData='tableData' @refresh='refresh' refreshVisible='true'></table-list>
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
            label: '用户姓名',
            key: 'memberName',
            width: 100
          },
          {
            label: '手机号',
            key: 'mobile',
            width: 120
          },
          {
            label: '身份证',
            key: "idNum",
            width: 160
          },
          {
            label: '借款批次号',
            key: 'batchNumber',
            width: 160,
          },
          {
            label: '借贷单号',
            key: 'loanId',
            width: 180,
          },
          {
            label: '还款本金',
            key: 'repayPrincipal',
            width: 100,
          },
          {
            label: '还款利息',
            key: 'repayInterest',
            width: 100,
          },
          {
            label: '还款期数',
            key: 'repayNum',
            width: 100,
          },
          {
            label: '实际还款时间',
            key: 'repayDate',
            width: 180,
          },
          {
            label: '开始日期',
            key: 'startDate',
            type: 'normal',
            width: 120,
            renderHeader: this.startTimeRenderHeader
          },
          {
            label: '结束日期',
            key: 'endDate',
            type: 'normal',
            width: 120,
            renderHeader: this.endTimeRenderHeader
          },{
            label: "状态",
            key: "status",
            width: 150
          }
        ],
        tableData: [
          {
            memberName: '小幸福',
            mobile: '13188888888',
            idNum: '131028111999999999',
            batchNumber: '12345678',
            loanId: 'id31231231241241242112',
            repayPrincipal: '888888',
            repayInterest: '0.15',
            repayNum: '12',
            repayDate: '2018-04-25',
            startDate: '2018-04-25',
            endDate: '2018-04-26',
            status: '还款完成'
          },
          {
            memberName: '小幸福',
            mobile: '13188888888',
            idNum: '131028111999999999',
            batchNumber: '098765432',
            loanId: 'id31231231241241242112',
            repayPrincipal: '7777777',
            repayInterest: '0.99',
            repayNum: '18',
            repayDate: '2018-04-25',
            startDate: '2018-04-25',
            endDate: '2018-04-26',
            status: '还款完成'
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
