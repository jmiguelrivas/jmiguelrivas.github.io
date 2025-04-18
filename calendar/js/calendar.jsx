import '../../0_global/js/index.js'
import React from 'https://esm.sh/react@18'
import { createRoot } from 'https://esm.sh/react-dom@18/client'

const App = () => <h1>✅ JSX + React via ES Modules</h1>

const root = createRoot(document.getElementById('root'))
root.render(<App />)
