import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { camelCase, upperFirst } from "lodash";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);
const app = createApp(App);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );
  console.log(requireComponent.keys());
  app.component(componentName, componentConfig.default || componentConfig);
});

app.use(store).use(router).mount("#app");
