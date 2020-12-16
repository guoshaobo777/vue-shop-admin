<template>
  <div>
      <el-button type="info" @click="clean">退出登陆</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    clean () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
