<template>
    <div class="con">
        <!--  顶部导航 -->
        <div class="nav">
          <div class="global-logo">
            <!-- <img src="../static/logo.png" alt=""> -->
          </div>
          <TopMenu @goSetPass="goSetPass"></TopMenu>
        </div>
        <!--  左边菜单 -->
        <LeftMenu ref="leftMenu" :dataLeft="menudata"></LeftMenu>
        <!-- 页面内容 -->
        <div class="content">
            <!--<Crumbs :id="regionId"></Crumbs>-->
              <nuxt/>
        </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Crumbs from '../components/Crumbs.vue'
  import LeftMenu from '../components/leftMenu.vue'
  import TopMenu from '../components/TopMenu.vue'
  export default {
    // mounted() {
    //   // console.log(this.$route.name)
    //   this.selectMenu = this.$route.name
    // },
    components: {
      axios, Crumbs, LeftMenu, TopMenu
    },
    data() {
      return {
        regionId: 1,
        selectItem: 0,
        // selectMenu: '',
        menudata: { // 左侧菜单数据
          regions: [
            {
              name: '上海',
              id: 1
            }, {
              name: '北京',
              id: 2
            }],
          navigation: [
            {
              title: '信用企业还款',
              name: 'normalCompany',
              icon: 'icon-skype'
            }, {
              title: '用户还款记录',
              name: 'repayRecord',
              icon: 'icon-doc-text'
            }, {
              title: '商户垫还记录',
              name: 'advanceRecord',
              icon: 'icon-cc-share'
            }, {
              title: '商户账户列表',
              name: 'accountList',
              icon: 'icon-cc-nd'
            }]
        }
      }
    },
    methods: {
      goSetPass() {
        this.$refs.leftMenu.menuBlur()
      }
    }
  }
</script>
<style lang="less">
    body{background: #f1f4f6;
      .con{
        width: 100%;
        min-height: 100vh;
        margin: auto;
        min-width: 1024px;
        .nav{
          height: 48px;
          background: #fff;
          position: fixed;
          width: 100%;
          z-index: 99;

          .global-logo{
            width: 200px;
            height: 48px;
            color: #fff;
            text-align: center;
            line-height: 48px;
            float: left;
            background: rgb(40,40,52);
            img{margin-left: 20px;}
          }

        }
        .content{
          color: #2a2d2e;
          margin-left: 200px;
          border-top: 1px solid #ddd;
          padding-top: 48px;
          position: relative;
          .pd10{padding:10px;}
        }

      }
    }
</style>
