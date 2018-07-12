<template>
  <div class="index">
    <div class="login-content">
      <div class="group">
        <label for="user">账户</label>
        <input type="text" placeholder="admin@admin.com" tabindex="2">
      </div>
      <div class="group password">
        <label for="user">密码</label>
        <input type="password" placeholder="..........." tabindex="2">
      </div>
      <div class="login-btn" @click="login">登录</div>
    </div>
  </div>
</template>
<script>
  /*eslint-disable*/
  import webHttp from '../plugins/axios'
  import axios from 'axios'
  export default {
    layout: 'index',
    components: {
      webHttp, axios
    },
    methods: {
      login() {
        webHttp({
          url: '/api/login',
          data: {
            name: 'test'
          },
          callback: (response) => {
            if (response.success) {
              localStorage.setItem('userToken', response.data)
              this.$router.push({name: 'normalCompany'})
            }
          }
        })
      }
    }
  }
</script>
<style lang="less">
  input{
    border: 2px solid #cbcad8;
    background: #fff;
    border-radius: 3px;
    -webkit-appearance: none;
    padding: 7px;
    font-size: 14px;
    color: #555;
    vertical-align: middle;
  }
  .index{
    background: #f5f5f5;
    height: 100vh;
    .login-content{
      padding-top: 200px;
      width: 300px;
      margin: 0 auto;
      .group{
        display: block;
        box-sizing: border-box;
        width: 100%;
        border-width: 1px;
        line-height: 24px;
        border-color: #DADCDE;
        margin: 11px 0;
        label{
          font-size: 14px;
          color: #262D33;
          font-weight: bold;
        }
        input{
          display: block;
          box-sizing: border-box;
          width: 100%;
          border-width: 1px;
          line-height: 24px;
          border-color: #DADCDE;
          margin: 11px 0;
        }
      }
      .password{
        margin-top: 20px
      }
      .login-btn{
        color: #fff;
        background: #57b382;
        border-bottom-color: #4ba575;
        font-size: 14px;
        padding: 10px 36px;
        border-bottom: none;
        width: 30px;
        margin-top: 30px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -ms-border-radius: 4px;
        border-radius: 4px;
      }
    }
  }
</style>

