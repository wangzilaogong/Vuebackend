<template>
  <div style="min-width:390px;">
     <p slot="header" style="text-align:center;font-weight:bold;font-size:18px;padding-bottom:20px;">
            <span>二次验证</span>
            <Icon type="md-close"  style="float:right;"  @click="closeModal" />
        </p>
     <Tabs v-model="secTabs">
        <TabPane label="手机验证" name="phone" v-if ="has.phoneAuthenticator">
          <Form >
            <FormItem label="手机号">
                <Input  v-model="phoneNumber"  disabled placeholder="请输入手机号" style="width:360px">
              </Input>
            </FormItem>
              <FormItem label="短信验证码" >
              <br>
                <Input v-model="phoneVercode" :maxlength="6" @keyup.native="clearWarn" placeholder="请输入短信验证码" style="width:70%"></Input>
              <Button  v-timecount  @click="sendVerCode('phone')">发送验证码</Button>
                <p v-if="warnMsg.phone" style="color:red">{{warnMsg.phone}}</p>
            </FormItem>
        </Form>
        </TabPane>
        <TabPane label="邮箱验证" name="email" v-if ="has.emailAuthenticator" >
          <Form >
            <FormItem label="邮箱">
                <Input  v-model="email"  disabled placeholder="请输入邮箱"  style="width:360px"></Input>
            </FormItem>
              <FormItem label="邮箱验证码" >
              <br>
                <Input v-model="emailVercode" :maxlength="6" @keyup.native="clearWarn" placeholder="请输入邮箱验证码" style="width:70%"></Input>
              <Button  v-timecount  @click="sendVerCode('email')">发送验证码</Button>
                <p v-if="warnMsg.email" style="color:red">{{warnMsg.email}}</p>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane label="谷歌验证" name="google" v-if ="has.googleAuthenticator">
           <Form >
            <FormItem label="谷歌验证码">
                <Input  v-model="ggVercode" :maxlength="6"  @keyup.native="clearWarn" placeholder="请输入谷歌验证码" style="width:70%"></Input>
                <p v-if="warnMsg.google" style="color:red">{{warnMsg.google}}</p>
            </FormItem>
        </Form>
        </TabPane>
    </Tabs>
    <Button type="primary" long @click="handleSubmit">确定</Button>
  </div>
</template>

<script>
import {verifyLoginOrPassword, bindStatus, verify} from 'Api/api'
import {sendVerCode} from 'Utils/verCode'
/**
 *  that ,type,'baseToken', 'gt'required
 */
export default {
  name: 'FinalModal',
  props: ['that', 'type', 'baseToken', 'gt', 'authMessage', 'validationRestrict', 'uri'],
  data () {
    return {
      has: {}, // 显示验证tabs的标志量
      secTabs: 'email',
      email: '',
      phoneNumber: '',
      emailVercode: '',
      phoneVercode: '',
      ggVercode: '',
      warnMsg: { // 错误提示
        phone: '',
        email: '',
        google: ''
      }
    }
  },

  created () {
    this.initData()
  },
  methods: {
    async initData () {
      if (this.validationRestrict) { // login
        this.has = this.validationRestrict
        this.email = this.authMessage.email
        this.phoneNumber = this.authMessage.phoneNumber === null ? '' : this.authMessage.phoneNumber.fullPhoneNumber
      } else if (this.uri) { // 忘记密码 todo
        this.has.phoneAuthenticator = this.uri.email === undefined
        this.has.emailAuthenticator = !!this.uri.email
        this.email = this.uri.email
      } else { // 登录之后
        this.currentVerify()
        const userInfo = this.that.currentUserInfo // 从调用者传递下来this 对象获取用户信息
        this.email = userInfo.accountInfo.email === undefined ? '未获取' : userInfo.accountInfo.email
        this.phoneNumber = userInfo.accountInfo.phoneNumber === undefined ? '未获取' : userInfo.accountInfo.phoneNumber.fullPhoneNumber
      }
    },
    async currentVerify () { // 登录之后 获取开启的验证方式
      try {
        const res = await bindStatus()
        if (res.status === 200) {
          this.has = res.data
        }
      } catch (error) {

      }
    },
    sendVerCode (type) {
      if (type === 'email') {
        sendVerCode(this, type, [this.email, this.type])
      } else {
        sendVerCode(this, type, [this.phoneNumber, this.type])
      }
    },
    handleSubmit () {
      let secModal = {}
      if (this.secTabs === 'email') {
        secModal = {
          account: 'mailto:' + this.email,
          code: this.emailVercode,
          type: this.type,
          token: this.baseToken
        }
        Object.assign(secModal, this.gt)
      } else if (this.secTabs === 'phone') {
        secModal = {
          account: 'number:' + this.phoneNumber,
          code: this.phoneVercode,
          type: this.type,
          token: this.baseToken
        }
        Object.assign(secModal, this.gt)
      } else {
        secModal = {
          account: 'google:' + this.email,
          code: this.ggVercode,
          type: this.type,
          token: this.baseToken
        }
        Object.assign(secModal, this.gt)
      }
      if (secModal.code === '' || !secModal.code.match(/^\d{6}$/)) {
        this.warnMsg[this.secTabs] = '验证码不能为空或格式不对'
        return
      }
      if (['login', 'forget_pwd', 'edit_pwd'].includes(this.type)) {
        this.verifyAction(secModal)
      } else {
        this.verifyActionLogin(secModal)
      }
    },
    async verifyAction (data) {
      try {
        const res = await verifyLoginOrPassword(data)
        if (res.status === 200) {
          const currentToken = res.data.token
          this.$Modal.remove()
          this.that.modalCallback(currentToken)
        }
      } catch (error) {
        if (error.status === 401) { // 忘记密码
          const currentToken = error.data.token
          this.that.modalCallback(currentToken, this.gt)
        }
      }
    },
    async verifyActionLogin (data) { // 登陆之后的
      try {
        const res = await verify(data)
        if (res.status === 200) {
          const currentToken = res.data.token
          this.$Modal.remove()
          this.that.modalCallback(currentToken)
        }
      } catch (error) {
      }
    },
    closeModal () {
      this.$Modal.remove()
    },
    clearWarn (value) {
      this.warnMsg[this.secTabs] = ''
    }

  }
}
</script>

<style>
.ivu-modal-confirm-footer{
  display: none;
}
.ivu-tabs-bar{
  border-bottom: none;
}
</style>
