export default {
  template: `
`,
  methods: {
    getZapp(path) {
      return `/assets/${path}`
    },
  },
  data: () => ({
    links: [{
        route: "drlogic-home",
        caption: "Home",
      },
      {
        route: "drlogic-team",
        caption: "Team",
      },
      {
        route: "drlogic-testimonials",
        caption: "Testimonials",
      },
      {
        route: "drlogic-services",
        caption: "Services",
      },
      {
        route: "drlogic-support",
        caption: "Support",
      },
      {
        route: "drlogic-contact",
        caption: "Contact",
      },
      {
        route: "drlogic-404",
        caption: "Error 404",
      },
    ],
  }),
}