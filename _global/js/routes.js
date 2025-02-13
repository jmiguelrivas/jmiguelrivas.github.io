const s2025 = [
  // {
  //   name: '2025',
  //   url: '2025/index',
  //   icon: 'user',
  // },
  {
    name: 'Header',
    url: '2025/index',
    icon: 'home',
    id: 'header',
  },
  {
    name: 'Skills',
    url: '2025/index',
    icon: 'wrench',
    id: 'skills',
  },
  {
    name: 'Portfolio',
    url: '2025/index',
    icon: 'book',
    id: 'portfolio',
  },
  {
    name: 'Resume',
    url: '2025/index',
    icon: 'drivers-license',
    id: 'resume',
  },
]

const sLOM = [
  {
    name: 'LOM Merged Servers',
    url: 'lom/merged',
    icon: 'gamepad',
    hidden: true,
  },
  {
    name: 'LOM Merged Servers Timeline',
    url: 'lom/timeline',
    icon: 'gamepad',
    hidden: true,
  },
  {
    name: 'LOM Parking',
    url: 'lom/parking',
    icon: 'gamepad',
    hidden: true,
  },
]

const sNano = [
  // {
  //   name: 'Grid System',
  //   url: 'nano/grid',
  //   icon: 'cube',
  //   hidden: true,
  // },
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

const sDocs = [
  // {
  //   name: 'Docs',
  //   url: 'docs/index',
  //   icon: 'file-o',
  // },
  {
    name: 'Bounce Range / Research',
    url: 'docs/bounce-range',
    icon: 'file-o',
  },
]

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const includeExtras = urlParams.get('extra') === 'true' ? true : false

const routes = [
  s2025,
  // sLOM,
  // sNano,
  // sFamily,
  sDocs,
]
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
  // .filter(r => (includeExtras ? true : !r.hidden))
  .map(route => {
    return route.separator
      ? { separator: true, hidden: route.hidden }
      : {
          name: route.name,
          url: `../${route.url}.html${route?.id ? '#' + route.id : ''}${queryString}`,
          icon: route.icon,
          hidden: route.hidden,
        }
  })

routes.pop()
// console.log(routes, includeExtras)
export { routes }
