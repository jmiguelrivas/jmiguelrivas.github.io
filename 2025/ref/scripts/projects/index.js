import inabima from "./inabima.js";
import jce from "./jce.js";
import jarabacoa_cabin from "./jarabacoa_cabin.js";
import family_abreu from "./family_abreu.js";
import family_lescay_castillo from "./family_lescay_castillo.js";
import icpv from "./icpv.js";
import building_villa_mella from "./building_villa_mella.js";
import madre_salvador from "./madre_salvador.js";
import penda from "./penda.js";
import res_los_tres_ojos from "./res_los_tres_ojos.js";

const projects = [
  inabima,
  jce,
  jarabacoa_cabin,
  family_abreu,
  family_lescay_castillo,
  icpv,
  building_villa_mella,
  madre_salvador,
  penda,
  res_los_tres_ojos,
]

const projectsPreview = projects.map(item => {
  return {
    id: item.id,
    name: item.name,
    shortName: item.shortName,
    cover: {
      thumbUrl: item.cover.thumbUrl,
      description: item.cover.description
    }
  }
})

export { projects, projectsPreview }