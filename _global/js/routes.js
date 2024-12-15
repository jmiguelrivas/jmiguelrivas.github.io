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
]

const sLOM = [
  {
    name: 'LOM Merged Servers Timeline',
    url: 'lom/index',
    icon: 'gamepad',
    hidden: true,
  },
  {
    name: 'LOM Merged Servers Timeline / Expanded',
    url: 'lom/expanded',
    icon: 'gamepad',
    hidden: true,
  },
]

const sNano = [
  {
    name: 'Grid System',
    url: 'nano/grid',
    icon: 'cube',
    hidden: true,
  },
  {
    name: 'Iconos',
    url: 'nano/iconos',
    icon: 'paint-brush',
    hidden: true,
  },
]

const sFamily = [
  {
    name: 'Family Tree',
    url: 'family/index',
    icon: 'tree',
    hidden: true,
  },
]

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const includeExtras = urlParams.get('extra') === 'true' ? true : false

const routes = [s2025, sLOM, sNano, sFamily]
  .map(r => {
    return [
      r,
      {
        separator: true,
        hidden: true,
      },
    ]
  })
  .flat(2)
  .map(r => ({
    ...r,
    ...(r?.hidden ? {} : { hidden: false }),
  }))
  // .filter(r => includeExtras || !r.hidden)
  .map(route => {
    return route.separator
      ? { separator: true }
      : {
          name: route.name,
          url: `../${route.url}.html${queryString}`,
          icon: route.icon,
        }
  })

routes.pop()
// console.log(routes, includeExtras, !false)
export { routes }
