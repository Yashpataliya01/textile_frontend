// src/assets/images.js (or wherever you prefer)

function importAll(r) {
  return r.keys().map(r);
}

const otherImageModules = import.meta.glob("./other/*.{png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
});

// Import your manual images
import img1 from "./Home/img1.jpg";
import img2 from "./Home/img2.jpg";
import img3 from "./Home/img3.jpg";

// Combine them all
export const otherImages = [
  img1,
  img2,
  img3,
  ...Object.values(otherImageModules),
];

// Or import specific named images normally
export { default as School } from "./Home/School.png";
export { default as Health } from "./Home/Health.png";
export { default as Hospitality } from "./Home/Hospital.png";
export { default as Workplace } from "./Home/Workplace.png";
export { default as Industrial } from "./Home/Industrial.png";
export { default as Security } from "./Home/Security.png";
