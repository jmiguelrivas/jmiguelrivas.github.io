import {
  createApp,
  ref
} from "../../0_global/modules/vue.esm-browser.js"

const App = {
  template: /*html*/ `
<div>
  <h1>{{ message }}</h1>
  <button @click="count++">Clicked {{ count }} times</button>
</div>
`,
  setup() {
    const message = ref('Hello from external JS!')
    const count = ref(0)
    return {
      message,
      count
    }
  }
}

createApp(App).mount('#root')