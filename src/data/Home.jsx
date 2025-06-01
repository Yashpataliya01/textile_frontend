import { FaRegHeart } from "react-icons/fa";
import { GiTie } from "react-icons/gi";
import { LiaIndustrySolid } from "react-icons/lia";
import { LuStethoscope } from "react-icons/lu";
import { TbTie } from "react-icons/tb";

import {
  otherImages,
  School,
  Health,
  Hospitality,
  Workplace,
  Industrial,
  Security,
} from "../assets/Images/Images";

// imports images
import img1 from "../assets/Images/Home/img1.jpg";
import img2 from "../assets/Images/Home/img2.jpg";
import img3 from "../assets/Images/Home/img3.jpg";
import img4 from "../assets/Images/Home/img4.jpg";
import img5 from "../assets/Images/Home/img5.jpg";
import img6 from "../assets/Images/Home/img6.jpg";
import img7 from "../assets/Images/Home/img7.jpg";
import img8 from "../assets/Images/Home/img8.jpg";
import img9 from "../assets/Images/Home/img9.png";

export const cards = [
  {
    id: 1,
    title: "School Uniform Fabric",
    icon: <TbTie />,
    description:
      "Tailored for comfort and durability, our school uniforms are designed to keep up with the active school day. Perfect fit for every student.",
    bgImage: Hospitality,
  },
  {
    id: 2,
    title: "Health Care Uniform Fabric",
    icon: <LuStethoscope />,
    description:
      "Experience professional-grade fabrics with our healthcare uniforms, engineered for hygiene, comfort, and long shifts.",
    bgImage: Health,
  },
  {
    id: 3,
    title: "Hospitality Industry Uniform Fabric",
    icon: <FaRegHeart />,
    description:
      "Impress your guests with our stylish yet functional hospitality uniforms, crafted to enhance the professional appearance of your staff.",
    bgImage: School,
  },
  {
    id: 4,
    title: "Workplace Uniform Fabric",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    description:
      "Elevate your corporate identity with our workplace uniforms that combine style, comfort, and practicality for daily wear.",
    bgImage: Workplace,
  },
  {
    id: 5,
    title: "Industrial Worker Uniform Fabric",
    icon: <LiaIndustrySolid />,
    description:
      "Built to last, our industrial worker uniforms offer maximum protection and functionality in challenging work environments.",
    bgImage: Industrial,
  },
  {
    id: 6,
    title: "Security Uniform Fabric",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    description:
      "Ensure a commanding presence with our security uniforms, designed for visibility, authority, and comfort during long hours.",
    bgImage: Security,
  },
];

export const images = otherImages;
