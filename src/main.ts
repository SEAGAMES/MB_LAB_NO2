import { createApp } from "vue";
import "./style.css";
// import router from './router'
import App from "./App.vue";
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
import Antd from "ant-design-vue";

const app = createApp(App);
app.use(Antd);
// app.use(router);
app.mount("#app");
