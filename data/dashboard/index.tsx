import {
  FiHome,
  FiBook,
  FiClipboard,
  FiVideo,
  FiCheckSquare,
  FiCalendar,
  FiAward,
  FiMail,
  FiSun,
  FiBell,
  FiGift,
} from "react-icons/fi";
import { LinkTypes, NoticeTypes } from "./types";

export const StudentLinks: LinkTypes[] = [
  {
    id: 1,
    link: "/dashboard",
    title: "dashboard",
    icon: <FiHome />,
  },
  {
    id: 2,
    link: "/dashboard/courses",
    title: "my courses",
    icon: <FiBook />,
  },
  {
    id: 3,
    link: "/dashboard/assignment",
    title: "assignment",
    icon: <FiClipboard />,
  },
  {
    id: 4,
    link: "/dashboard/online-classes",
    title: "online classes",
    icon: <FiVideo />,
  },
  {
    id: 5,
    link: "/dashboard/attendance",
    title: "attendance",
    icon: <FiCheckSquare />,
  },
  {
    id: 6,
    link: "/dashboard/schedule",
    title: "class schedule",
    icon: <FiCalendar />,
  },
  {
    id: 7,
    link: "/dashboard/exams-results",
    title: "exams and results",
    icon: <FiAward />,
  },
  {
    id: 8,
    link: "/dashboard/messages",
    title: "messages",
    icon: <FiMail />,
  },
];

export const OtherLinks: LinkTypes[] = [
  {
    id: 1,
    link: "/dashboard/notice",
    title: "notice board",
    icon: <FiBell />,
  },
  {
    id: 2,
    link: "/dashboard/holiday",
    title: "holiday",
    icon: <FiSun />,
  },
  {
    id: 3,
    link: "/dashboard/events",
    title: "all events",
    icon: <FiGift />,
  },
];

export const NoticeDemo: NoticeTypes[] = [
  {
    id: 1,
    title: "Blood Donation Day 2024",
    date: "25 Mar 2024",
    description:
      "Join us for our annual blood donation day. All students and staff are encouraged to participate. Your contribution can save lives.",
  },
  {
    id: 2,
    title: "Spring Semester Exam Schedule",
    date: "01 Apr 2024",
    description:
      "The exam schedule for the Spring semester is now available. Please check the notice board or the school portal for more details.",
  },
  {
    id: 3,
    title: "School Sports Day",
    date: "15 Apr 2024",
    description:
      "Our annual sports day is coming up. There will be various athletic events and fun activities. All students are invited to participate.",
  },
  {
    id: 4,
    title: "Parent-Teacher Conference",
    date: "20 Apr 2024",
    description:
      "We will be holding a parent-teacher conference to discuss student progress and address any concerns. Please book your appointment in advance.",
  },
  {
    id: 5,
    title: "Science Fair 2024",
    date: "10 May 2024",
    description:
      "The annual science fair will showcase projects from students across all grades. Come and see the amazing work done by our students.",
  },
  {
    id: 6,
    title: "Library Book Fair",
    date: "18 May 2024",
    description:
      "The library will be hosting a book fair with a wide selection of books for all ages. Don’t miss out on this opportunity to expand your library.",
  },
  {
    id: 7,
    title: "Summer Break Notice",
    date: "01 Jun 2024",
    description:
      "The school will be closed for summer break starting from 1st June. Classes will resume on 15th July. Have a great summer!",
  },
  {
    id: 8,
    title: "Art Exhibition",
    date: "12 Jun 2024",
    description:
      "Our annual art exhibition will display artwork created by our talented students. The exhibition is open to all students, staff, and parents.",
  },
  {
    id: 9,
    title: "Music Concert",
    date: "20 Jun 2024",
    description:
      "The school music department will be holding a concert featuring performances by the school band and choir. Everyone is welcome to attend.",
  },
  {
    id: 10,
    title: "New School Year Orientation",
    date: "10 Jul 2024",
    description:
      "Orientation for the new school year will be held on 10th July. New students and their parents are encouraged to attend.",
  },
];
