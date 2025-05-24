import '../../0_global/js/index.js'

import {
  createApp,
  // ref
} from '../../0_global/modules/vue.esm-browser.js'

// import Contact from "./section_contact.js"
import Home from './section_home.js'

const App = {
  components: {
    // Contact,
    Home,
  },
  template: `
<div>
  <!-- <Contact /> -->
  <Home />
</div>
`,
  setup() {
    return {}
  },
}

const app = createApp(App)
app.mount('#root')