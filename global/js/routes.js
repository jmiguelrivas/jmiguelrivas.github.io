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

const routes = [...s2025].map(route => ({
  name: route.name,
  url: `../${route.url}.html`,
  icon: route.icon,
}))

export { routes }
