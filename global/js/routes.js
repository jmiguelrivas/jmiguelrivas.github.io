const s2025 = [
  {
    name: 'Home',
    url: '2025/index',
    icon: 'home',
    hidden: true,
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
    hidden: true,
  },
  {
    name: 'Grid System',
    url: '2025/nano',
    icon: 'phone',
    hidden: true,
  },
]

const sLOM = [
  {
    separator: true,
  },
  {
    name: 'LOM Merged Servers Timeline',
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
  .map(route => {
    return route.separator
      ? { separator: true }
      : {
          name: route.name,
          url: `../${route.url}.html${queryString}`,
          icon: route.icon,
        }
  })

export { routes }
