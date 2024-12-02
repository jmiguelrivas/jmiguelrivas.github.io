import places from "../db/places.js";

export default {
  ...places.icpv,
  id: 'icpv',
  description: "",
  cover: {
    url: "https://placehold.co/1920x1080",
    thumbUrl: "https://placehold.co/350x197",
    description: "Preview del Proyecto",
  },
  cads: [
    {
      url: "https://placehold.co/1920x1080",
      description: "Preview del Proyecto 1",
    },
  ],
};