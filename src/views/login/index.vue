<template>
  <div class="login-wrap">
    <!-- 导航头 -->
    <van-nav-bar title="登陆" />
    <!-- 登陆块 -->
    <van-cell-group>
      <van-field v-model="user.mobile" label="手机号" placeholder="请输入手机号" clearable left-icon="contact"
      :error-message="mobileErrorMsg" />
      <van-field v-model="user.code" label="验证码" placeholder="请输入验证码" clearable left-icon="diamond-o">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
      <div class="login-btn">
        <van-button @click="handleLogin" class="btn" type="info">登陆</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      mobileErrorMsg: ''
    }
  },
  methods: {
    // 点击按钮登陆
    async handleLogin () {
      // 表单校验
      if (this.user.mobile.trim().length === 0) {
        this.mobileErrorMsg = '请输入手机号码'
        return
      } else {
        this.mobileErrorMsg = ''
      }
      try {
        // 登陆状态 -- token
        const data = await login(this.user)
        // 跳转之前保存登陆状态
        this.$store.commit('setUser', data)
        // 跳转到 home
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log('登陆失败' + err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn {
  padding: 10px;
  .btn {
    width: 100%;
  }
}
</style>
