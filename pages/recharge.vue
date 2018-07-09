<template>
  <div id="recharge">
    <div class="breadcrumbOpt">
      <a class="breadcrumbLeft" href="/">首页</a>
      <a class="breadcrumbItem">充值</a>
    </div>
    <div class="recharge">
      <div class="accountTotle">账户余额：<span>￥12000.00</span></div>
      <el-form ref="form1" :model="form1" :rules="rules1" label-width="80px">
        <el-form-item prop="money" label="充值金额">
          <el-input class="input-nuxt" v-model="form1.money" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pass" label="交易密码">
          <el-input class="input-nuxt" type="password" v-model="form1.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" class="btn" type="primary" @click="submitForm('form1')">提交</el-button>
        </el-form-item>
        <p class="tips">提示： 充值需T+1到账，节假日需往后顺延</p>
      </el-form>
    </div>
  </div>
</template>
<script>
  import webHttp from '../plugins/axios'
  export default {
    layout: 'main',
    data() {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.form1.pass !== '') {
//            this.$refs.form1.validateField('pass')
          }
          callback()
        }
      }
      let validateMoney = (rule, value, callback) => {
        let reg = /^\+?[1-9][0-9]*$/
        if (value === '') {
          callback(new Error('请输入金额'))
        } else if (!reg.test(value)) {
          callback(new Error('金额必须为数字'))
        } else {
          if (this.form1.money !== '') {
//            this.$refs.form1.validateField('money')
          }
          callback()
        }
      }
      return {
        form1: {
          money: '',
          pass: ''
        },
        rules1: {
          money: [
            { validator: validateMoney, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    },
    components: {
      webHttp
    }
  }
</script>
<style lang='less'>
  @import '../assets/css/formele.less';
  #recharge{
    .recharge{
      background-color: #fff;
      padding: 20px;
      margin: 0 20px;
      .accountTotle{
        height: 35px;
        padding-left:8px;
        font-size: 18px;
        border-bottom: 1px solid #eee;
        margin-bottom: 25px;
        span{
          color:#468847;
        }
      }
      .btnstyle();
      .inputstyle();
      .tips{
        color:#777;
        font-style: italic;
      }
    }
  }
</style>
