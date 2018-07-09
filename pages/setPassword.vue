<template>
  <div id="setPassword">
    <div class="breadcrumbOpt">
      <a class="breadcrumbLeft" href="/">首页</a>
      <a class="breadcrumbItem">重置密码</a>
    </div>
    <div class="setPass">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="初始密码" prop="pass">
          <el-input class="input-nuxt" type="password" v-model="ruleForm2.passold" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input class="input-nuxt" type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input class="input-nuxt" type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" class="btn" type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        </el-form-item>
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
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
      }
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        ruleForm2: {
          passold: '',
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          passold: [
            { validator: validatePass, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
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
  #setPassword{
    .setPass{
      background-color: #fff;
      padding: 20px;
      margin: 0 20px;
      .btnstyle();
      .inputstyle();
    }
  }
</style>
