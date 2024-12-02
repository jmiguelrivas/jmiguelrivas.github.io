const s2025 = [
  {
    name: 'Home',
    url: '2025/index',
    icon: 'home',
  },
  {
    name: 'Resume',
    url: '2025/resume',
    icon: 'user',
  },
  {
    name: 'Portfolio',
    url: '2025/portfolio',
    icon: 'book',
  },
  {
    name: 'Grid System',
    url: '2025/nano',
    icon: 'phone',
  },
]

const sLOM = [
  {
    name: 'LOM',
    url: 'lom/index',
    icon: 'lock',
    hidden: true,
  },
]

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const includeExtras = urlParams.get('extra') === 'true' ? true : false

const routes = [...s2025, ...sLOM]
  .filter(route => (includeExtras ? true : route.hidden !== true))
  .map(route => ({
    name: route.name,
    url: `../${route.url}.html`,
    icon: route.icon,
  }))

export { routes }
