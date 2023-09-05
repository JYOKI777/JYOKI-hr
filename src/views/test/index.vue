<template>
  <div>
    <!-- el-form 容器需要绑定
    1.整个表单的数据对象作为model 属性（不是v-model）
    2.表单校验的规则 rule 对象
    3.给每个 form-item 指定 prop 数据为当前表单项的字段名
    -->
    <el-form :model="formData" :rules="rules">

      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="formData.mobile" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password" />
      </el-form-item>

      <el-form-item label="再次输入密码" prop="checkPassword">
        <el-input v-model="formData.checkPassword" />
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
    // 定义一个自定义校验函数，交给 rules
    // 每当失去焦点的时候，这个函数就会被调用
    // 不使用箭头函数，使用function的话会影响this的指向，下面为例的话就是没有办法拿到formData里面的password的数据
    const validPasseord = (rule, val, callback) => {
      // 自带三个形参，rule 当前使用规则，val 当前用户输入值，callback 放行回调
      // 1.写出判断逻辑输入 true / false
      const isValid = val === this.formData.password
      // 2.根据结果调用回调
      if (isValid) {
        // 成功 直接callback
        callback()
      } else {
        // 失败
        callback(new Error('两次密码必须相同'))
      }
    }
    return {
      formData: {
        mobile: '',
        password: '',
        checkPassword: ''
      },
      rules: {
        // 规则对象里面的每个属性，都是跟数据对象字段对应
        mobile: [
        // 每个规则属性，都是数组，包裹一个个判断规则对象
          { required: true, message: '该项不能为空', trigger: 'blur' },
          { pattern: /^1[3-9][0-9]{9}$/, message: '请输入正确手机号', trigger: 'blur' }
          // { pattern: /^(1[3-9][0-9]{9}|[a-zA-Z0-9]+)$/, message: '请输入正确手机号或者用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '该项不能为空', trigger: 'blur' },
          { min: 6, max: 12, message: '密码在6-12位之间', trigger: 'blur' }
        ],
        checkPassword: [
          { required: true, message: '该项不能为空', trigger: 'blur' },
          // 如果遇到规则无法描述的校验逻辑，可以用函数的形式进行自定义
          { validator: validPasseord, trigger: 'blur' }
        ]
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
