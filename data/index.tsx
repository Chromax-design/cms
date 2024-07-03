import { FaDollarSign, FaFacebook, FaInstagram, FaLinkedin, FaListAlt, FaTwitter } from "react-icons/fa";
import { featureType, navLinkType, socialType } from "./types";
import { MdTouchApp } from "react-icons/md";


export const socials: socialType[] = [
  { id: 1, alt: "facebook", icon: <FaFacebook />, href: "" },
  { id: 2, alt: "instagram", icon: <FaInstagram />, href: "" },
  { id: 3, alt: "linkedin", icon: <FaLinkedin />, href: "" },
  { id: 4, alt: "twitter", icon: <FaTwitter />, href: "" },
];


export const navLinks: navLinkType[] = [
  { id: 1, title: "home", href: "/" },
  { id: 2, title: "about us", href: "/about" },
  { id: 3, title: "contact us", href: "/contact" },
  { id: 4, title: "features", href: "/features" },
  { id: 5, title: "pricing", href: "/pricing" },
];


export const features:featureType[] = [
  {
    id: 1,
    title: "Easy to use",
    desc: "Easy, relatable and user friendly learning tools",
    icon: <MdTouchApp />
  },
  {
    id: 2,
    title: "Incredibly affordable",
    desc: "Affordable premium educational solution",
    icon: <FaDollarSign />
  },
  {
    id: 3,
    title: "Content priority",
    desc: "Tailored for instructors, students, parents and school administrators",
    icon: <FaListAlt />
  },
];
