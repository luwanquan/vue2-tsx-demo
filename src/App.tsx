import { defineComponent, ref, watchEffect } from "vue-demi";
import logo from "./assets/logo.png";
import "./App.css";
import { Switch } from "element-ui";

export const App = defineComponent({
  setup() {
    const img = ref(null);
    const show = ref(true);

    watchEffect(() => {
      console.log(img.value);
    });

    return () => (
      <div id="app">
        <div>
          <Switch v-model={show.value}></Switch>
        </div>
        {show.value ? <img ref={img} alt="Vue logo" src={logo} /> : null}
      </div>
    );
  },
});
