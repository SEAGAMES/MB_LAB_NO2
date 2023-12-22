<template>
  <h1 align="center">Template</h1>
  <router-view />
</template>
<script>
import { SearchOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    SearchOutlined,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
