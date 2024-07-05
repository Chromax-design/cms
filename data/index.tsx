import {
  FaDollarSign,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaListAlt,
  FaMap,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import {
  aboutPageTextType,
  contactsType,
  featureType,
  navLinkType,
  socialType,
} from "./types";
import { MdTouchApp } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";

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

export const features: featureType[] = [
  {
    id: 1,
    title: "Easy to use",
    desc: "Easy, relatable and user friendly learning tools",
    icon: <MdTouchApp />,
  },
  {
    id: 2,
    title: "Incredibly affordable",
    desc: "Affordable premium educational solution",
    icon: <FaDollarSign />,
  },
  {
    id: 3,
    title: "Content priority",
    desc: "Tailored for instructors, students, parents and school administrators",
    icon: <FaListAlt />,
  },
];

export const aboutPageText: aboutPageTextType[] = [
  {
    id: 1,
    subtitle: "About CLASS",
    title: "Seamless and easy to use educational platform",
    desc: "Welcome to CLASS, where learning meets innovation! Our mission is to transform the educational experience by making it seamless, intuitive, and enjoyable for students, educators, and lifelong learners alike.",
    img: "about-img-2.svg",
  },
  {
    id: 2,
    title: "Our Vision",
    desc: "We believe that education should be accessible, engaging, and effective. Our vision is to create a digital learning environment that transcends traditional boundaries, offering a platform that is not only user-friendly but also adaptive to the needs of every learner.",
    img: "about-img-3.svg",
  },
  {
    id: 3,
    title: "Our commitment",
    desc: "At CLASS, we are dedicated to continuous improvement and innovation. We regularly seek feedback from our users to enhance our platform and introduce new features that support effective learning. Our team of passionate developers, and support staff work tirelessly to ensure that our platform remains at the forefront of educational technology.",
    img: "about-img-4.svg",
    showButton: true,
  },
];

export const contacts:contactsType[] = [
  { id: 1, icon: <FaPhoneAlt />, desc: "09045678934", title: "call anytime", link: 'tel: 09045678934' },
  {
    id: 2,
    icon: <FaMessage />,
    desc: "mail@visualdev.com",
    title: "send email",
    link: 'mailto: mail@visualdev.com '
  },
  {
    id: 3,
    icon: <FaMap />,
    desc: "Suite 109, Trinity Plaza, Obafemi Awolowo way, Ikeja, Lagos State.",
  },
];
