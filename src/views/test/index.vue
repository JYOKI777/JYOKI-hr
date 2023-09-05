<template>
  <div>
    <el-form>
      <el-form-item label="手机号">
        <el-input v-model="formData.mobile" />
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="formData.password" />
      </el-form-item>

      <el-form-item>
        <el-button @click="login">登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        mobile: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      console.log(this.formData)
    }
  }
}
</script>

<style>

</style>
