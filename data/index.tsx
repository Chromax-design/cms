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
  featuresPageTypes,
  featureType,
  navLinkType,
  socialType,
  faqsType,
  supportTypes,
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

export const contacts: contactsType[] = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    desc: "09045678934",
    title: "call anytime",
    link: "tel: 09045678934",
  },
  {
    id: 2,
    icon: <FaMessage />,
    desc: "mail@visualdev.com",
    title: "send email",
    link: "mailto: mail@visualdev.com ",
  },
  {
    id: 3,
    icon: <FaMap />,
    desc: "Suite 109, Trinity Plaza, Obafemi Awolowo way, Ikeja, Lagos State.",
  },
];

export const featuresPageContent: featuresPageTypes[] = [
  {
    id: 1,
    img: "intuitive-design.svg",
    title: "Intuitive User Interface",
    desc: "Our platform boasts an intuitive user interface that ensures both educators and students can navigate effortlessly. With clear menus, straightforward workflows, and user-friendly design, everyone can quickly become proficient in using the system.",
  },
  {
    id: 2,
    img: "comprehensive-management.svg",
    title: "Comprehensive Course/subject Management",
    desc: "Create, manage, and deliver courses with ease. Our course management system supports multimedia content, interactive assignments, and seamless communication between educators and students. It also includes automated grading and feedback systems to streamline the evaluation process.",
  },
  {
    id: 3,
    img: "mobile-friendly.svg",
    title: "Mobile-Friendly Access",
    desc: "Access the platform from any device, anywhere. Our mobile-friendly design ensures that educators and students can stay connected and engaged, even on the go.",
  },
  {
    id: 4,
    img: "accessibility.svg",
    title: "Accessibility and Inclusivity",
    desc: "Our platform is designed to be accessible and inclusive, catering to diverse learning needs and ensuring that all students have equal opportunities to succeed. We comply with global accessibility standards to support all users.",
  },
  {
    id: 5,
    img: "support.svg",
    title: "Continuous Support and Training",
    desc: "We provide continuous support and training to ensure that all users can make the most of our platform. From onboarding to ongoing assistance, our dedicated support team is here to help you every step of the way.",
  },
];

export const faqs: faqsType[] = [
  {
    id: 1,
    question: "What is this School CMS?",
    answer:
      "This School CMS is a comprehensive educational platform designed to streamline and enhance the management of educational content, student records, communication, and administrative tasks. It provides an intuitive interface for educators, students, and administrators to interact and manage their educational activities efficiently.",
  },
  {
    id: 2,
    question: "Who can use this platform?",
    answer:
      "The platform is designed for use by educators, students, school administrators, and parents. Each user type has specific features and access levels tailored to their needs.",
  },
  {
    id: 3,
    question: "What should I do if I encounter technical issues?",
    answer:
      'If you face any technical issues, visit the "Support" section and check the common troubleshooting tips. If the problem persists, contact our technical support team via the "Contact Us" form or email support@visualdev.com.',
  },
  {
    id: 4,
    question: "How do I report a bug?",
    answer:
      'To report a bug, go to the "Report a Bug" section under "Support." Provide detailed information about the issue, including screenshots if possible, and submit the form. Our technical team will address it promptly.',
  },
  {
    id: 5,
    question: "How is my data protected?",
    answer:
      "We prioritize the security and privacy of your data. Our platform uses industry-standard encryption and follows strict data protection protocols to ensure your information is safe. For more details, please refer to our Privacy Policy.",
  },
  {
    id: 6,
    question: "Who has access to my data?",
    answer:
      "Access to your data is restricted to authorized personnel only, such as school administrators and teachers. We follow strict data privacy policies to ensure your information is protected. For more details, refer to our Privacy Policy.",
  },
  {
    id: 7,
    question: " What should I do if the platform is running slow?",
    answer:
      "First, check your internet connection. If the issue persists, clear your browser's cache and cookies. If the platform continues to run slowly, contact technical support for further assistance.",
  },
];

export const supportPage: supportTypes[] = [
  {
    id: 1,
    title: "Contact information",
    desc: "For general inquiries, assistance, or technical support, please contact us using one of the methods below:",
    isWhat: "contact",
    img: "contact.svg",
  },
  {
    id: 2,
    title: "Technical Support",
    desc: "If you encounter any technical issues or need assistance with our platform, our dedicated support team is here to help. Please provide us with the following details when contacting support:",
    isWhat: "support",
    img: "support.svg",
  },
  {
    id: 3,
    title: "feedback",
    desc: "We value your feedback! If you have suggestions for improvements or features you would like to see added to our platform, please let us know. Your input helps us enhance your experience with our School CMS.",
    isWhat: 'feedback',
    img: "feedback.svg",
  },
];
