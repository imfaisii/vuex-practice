import { createApp } from "vue";
import "./bootstrap";

import router from "./router";
import store from "./store";

const app = createApp({});

app.use(router);
app.use(store);

app.mount("#app");
