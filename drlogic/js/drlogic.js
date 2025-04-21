import '../../0_global/js/index.js'

import {
  createApp,
  ref
} from '../../0_global/modules/vue.esm-browser.js'

import Contact from "./section_contact.js"

const App = {
  components: {
    Contact,
  },
  template: /*html*/ `
<div>
  <Contact />
</div>
`,
  setup() {
    const message = ref('Hello from external JS!')
    const count = ref(0)
    return {
      message,
      count,
    }
  },
}

const app = createApp(App)
app.mount('#root')