<template>
  <div>
    <input type="text" placeholder="请输入姓名" />
    <br />
    <br />
    <button @click="toHomePage()">开始使用</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  props: {},
  methods: {
    toHomePage: function() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
