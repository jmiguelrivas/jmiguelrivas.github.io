const s2025 = [
  // {
  //   name: '2025',
  //   url: '2025/index',
  //   icon: 'user',
  // },
  {
    name: 'Home',
    url: '2025/index',
    icon: 'home',
    // id: 'header',
  },
  // {
  //   name: 'Skills',
  //   url: '2025/index',
  //   icon: 'wrench',
  //   id: 'skills',
  // },
  // {
  //   name: 'Portfolio',
  //   url: '2025/index',
  //   icon: 'book',
  //   id: 'portfolio',
  // },
  // {
  //   name: 'Resume',
  //   url: '2025/index',
  //   icon: 'drivers-license',
  //   id: 'resume',
  // },
]

const sLOM = [
  {
    name: 'LOM Merged Servers Timeline',
    url: 'lom/timeline',
    icon: 'gamepad',
    hidden: true,
  },
  {
    name: 'LOM Merged Servers',
    url: 'lom/merged',
    icon: 'gamepad',
    hidden: true,
  },
  {
    name: 'LOM Merged Gaps Tracker',
    url: 'lom/gaps',
    icon: 'gamepad',
    hidden: true,
  },
  {
    name: 'LOM Users',
    url: 'lom/users',
    icon: 'gamepad',
    hidden: true,
  },
  // {
  //   name: 'LOM Parking',
  //   url: 'lom/parking',
  //   icon: 'gamepad',
  //   hidden: true,
  // },
]

const sFamily = [
  {
    name: 'Family Tree',
    url: 'family/index',
    icon: 'tree',
    hidden: true,
  },
]

const others = [
  {
    name: '13 Months Calendar',
    url: 'calendar/index',
    icon: 'calendar',
    tags: ['react 19'],
  },
  {
    name: 'Color Cube',
    url: 'cube/index',
    icon: 'cube',
    tags: ['web-components', 'threejs'],
  },
  // {
  //   name: 'DrLogic',
  //   url: 'drlogic/index',
  //   icon: 'cube',
  //   tags: ['vue 2', 'wip'],
  // },
]

const queryString = window.location.search
// const urlParams = new URLSearchParams(queryString)
// const includeExtras = urlParams.get('extra') === 'true' ? true : false

const routes = [
  s2025,
  others,
  sLOM,
  // sFamily,
  // {
  //   name: 'Vitest',
  //   url: 'vitest/index',
  //   icon: 'file-o',
  //   tags: ['vitest'],
  // },
  // {
  //   name: 'Storybook',
  //   url: 'documentation/index',
  //   icon: 'file-o',
  //   tags: ['storybook'],
  // },
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
          tags: route.tags,
        }
  })

routes.pop()
// console.log(routes, includeExtras)
export { routes }
