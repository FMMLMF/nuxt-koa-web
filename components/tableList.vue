<template>
  <div class="tableCon">
    <div class="table-toolbar">
      <!-- 刷新按钮 -->
      <div v-show="refreshVisible" v-on:click="refresh()" class="btn">
        <span class="icon icon-refresh"></span>
      </div>
      <!-- 新增按钮 -->
      <div v-show="createVisible" v-on:click="create()" class="btn">
        <span class="icon icon-create"></span>
        <span class="text">新增</span>
      </div>
      <!-- 还款按钮 -->
      <div v-show="repayVisible" v-on:click="repay()" class="btn" :class="{'btn-forbidden': canRepay == false}">
        <span class="icon icon-flag"></span>
        <span class="text">还款</span>
      </div>
      <!-- 更多操作 -->
      <v-dropdown v-show="moreVisible" @moreTap='moreTap'></v-dropdown>
      <!-- 手机号搜索输入框 -->
      <el-input placeholder="请输入手机号" @keyup.enter.native="searchPhone" @blur="searchPhone" v-model="phone" v-if="showPhoneSearch" class="toolbar-input-con">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <!-- 还款计划id搜索输入框 -->
      <el-input placeholder="请输入还款计划id" @keyup.enter.native="searchPlanId" @blur="searchPlanId" v-model="planId" v-if="showPlanIdSearch" class="toolbar-input-con">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <!-- 分页组合 -->
      <div class="pagination">
        <span class="pages">合计 : {{total}}&nbsp;&nbsp;</span>
        <span class="per-page">每页:&nbsp;</span>
        <div class="select-con" style="width: 55px;">
          <select class="dropdown-select" v-model="pageSize" @change="pageSizeChange" name="limit">
            <option value="10" selected="">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div v-show="pageConVisible" style="display:inline-block">
          <span class="pages">&nbsp;页数 {{currentPage}} / {{totalPages}}</span>
          <div class="btn prev" @click="prev" :class="{ 'btn-forbidden':currentPage==1 }" data-direction="prev"><span class="icon-prev" data-direction="prev"></span></div>
          <div class="btn next" @click="next" :class="{ 'btn-forbidden':currentPage==totalPages }" data-direction="next"><span class="icon-next" data-direction="next"></span></div>
        </div>
      </div>
    </div>
    <!-- 表格内容 -->
    <div class="tableMain">
      <el-table
        :data="tableData"
        @filter-change="filterChange"
        style="width: 100%">
        <el-table-column :render-header="item.renderHeader" :column-key="item.key" show-overflow-tooltip :filter-multiple='false' filter-placement="bottom-start" :filters="item.dateFilters" :align="item.align" :label="item.label" :prop="item.key" :min-width="item.width" v-for="(item, index) in columns" :key="index">
          <template slot-scope="scope">
            <div v-if="item.type == 'radio'">
              <el-radio class="radio" v-model="radio" :label="scope.$index" @change.native="selectRow(scope.$index)" >&nbsp;</el-radio>
            </div>
            <div v-if="item.type == 'index'">{{scope.$index}}</div>
            <div v-else>{{tableData[scope.$index][item.key]}}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  /*eslint-disable*/
  import vDropdown from '../components/v-dropdown.vue'
  export default {
    data() {
      return {
        radio: '',
        startTimeValue: '',
        endTimeValue: '',
        pageConVisible: true,
        total: 65,
        currentPage: 1,
        // totalPages: 6,
        pageSize: 10,
        canRepay: false,
        id: '',
        phone: '',
        planId: ''
      }
    },
    props: {
      refreshVisible: false,
      createVisible: false,
      repayVisible: false,
      moreVisible: false,
      columns: '',
      tableData: '',
      showPhoneSearch: false,
      showPlanIdSearch: false
    },
    components: {
      vDropdown
    },
    mounted() {
    },
    computed: {
      totalPages: function() {
        return  Math.ceil(this.total/this.pageSize)
      }
    },
    watch: {
      totalPages(curVal,oldVal) {
        if(curVal == 1){
          this.pageConVisible = false
        }else{
          this.pageConVisible = true
        }
      }
    },
    methods: {
      filterChange(filters) {// 筛选
        for(let key in filters){
          let value = filters[key][0]
          if(value === undefined){
            value = ''
          }
          this.$emit('filterChange',key,value)
        }
      },
      selectRow(id){
        this.canRepay = true
        this.id = id
      },
      refresh() {// 刷新
        this.$emit('refresh')
      },
      repay() {// 还款
        if(this.canRepay) {
          this.$emit('repay',this.id)
        }
      },
      create() {// 新增
        this.$emit('create')
      },
      moreTap(id) {// 更多操作
        this.$emit('moreTap',id)
      },
      searchPhone() {
        this.$emit('searchPhone',this.phone)
      },
      searchPlanId() {
        this.$emit('searchPlanId',this.planId)
      },
      pageSizeChange() {
        this.currentPage = 1
        this.$emit('pageSizeChange',this.pageSize)
      },
      prev() {
        if(this.currentPage > 1) {
          this.currentPage -= 1
          this.$emit('prev',this.currentPage)
        }
      },
      next() {
        if(this.currentPage < this.totalPages) {
          this.currentPage += 1
          this.$emit('next',this.currentPage)
        }
      }
    }
  }
</script>
<style lang='less'>
  .tableCon{
    padding: 10px 20px;
    margin: 0 20px;
    background-color: #ffffff;
    .table-toolbar {
      position: relative;
      z-index: 4;
      margin: 10px 0;
      .pagination{
          float: right;
          color: #777;
      }
    }
  }
  .el-table{
    color: #2a2d2e;
    .cell{
      line-height: normal;
    }
    td, th {
      border-bottom: 1px solid #e4eaec;
      border-left: 1px solid #e4eaec;
      font-weight: 400;
      font-size: 12px;
      padding: 10px 0;
      empty-cells: show;
    }
    thead {
      color: #909399;
      font-weight: 500;
      th {
          background: #e4eaec;
          color: #58666e;
      }
    }
  }
  .el-table__column-filter-trigger{
    position: absolute;
    line-height: normal;
    height: 14px;
    background: #9ed5f0;
    border-bottom: 2px solid #6ec0e9;
    margin-left: 5px;
    border-radius: 2px;
    i{
      color: #555;
      padding: 0 2px;
    }
  }
  .el-table-filter__list{
    padding: 0;
    min-width: 140px;
    line-height: 32px;
    background-color: #3b3f4e;
    color: #9e9daa;
    .el-table-filter__list-item.is-active{
      background-color: #3b3f4e;
      color: #9e9daa;
    }
    .el-table-filter__list-item:hover{
      background-color: #2a2d2e;
      color: #ffffff;
    }
  }
  .el-radio__label{
    padding: 0;
  }
  .el-table th div{
    line-height: normal;
  }
</style>
