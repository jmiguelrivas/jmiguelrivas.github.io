import places from "../db/places.js";

export default {
  ...places.famAbreu,
  id: 'family-abreu',
  description: "Casa remodelada para la familia Abreu en El Quemado, La Vega, transformada a partir de una modesta vivienda rural, con todas los espacios que realzan la calidad de vida del ser humano, como son tres dormitorios de visita, baño comun, habitacion principal con servicio sanitario y walk in closet interno, gran terraza, galería, marquesina doble, area de lavado, cocina-desayunador-comedor.",
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
  sections: [
  ],
};