import {
  FiHome,
  FiBook,
  FiClipboard,
  FiVideo,
  FiCheckSquare,
  FiCalendar,
  FiAward,
  FiMail,
  FiSettings,
  FiSpeaker,
} from "react-icons/fi";
import { FaChalkboardTeacher } from "react-icons/fa";
import {
  LinkTypes,
  NoticeTypes,
  StudentTabListTypes,
  TeacherDemoTypes,
} from "./types";

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
    link: "/dashboard/teachers",
    title: "my teachers",
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 4,
    link: "/dashboard/assignment",
    title: "assignment",
    icon: <FiClipboard />,
  },
  {
    id: 5,
    link: "/dashboard/online-classes",
    title: "online classes",
    icon: <FiVideo />,
  },
  {
    id: 6,
    link: "/dashboard/attendance",
    title: "attendance",
    icon: <FiCheckSquare />,
  },
  {
    id: 7,
    link: "/dashboard/schedule",
    title: "class schedule",
    icon: <FiCalendar />,
  },
  {
    id: 8,
    link: "/dashboard/exams",
    title: "exams and results",
    icon: <FiAward />,
  },
  {
    id: 9,
    link: "/dashboard/messages",
    title: "messages",
    icon: <FiMail />,
  },
];

export const OtherLinks: LinkTypes[] = [
  {
    id: 1,
    link: "/dashboard/profile",
    title: "profile",
    icon: <FiSettings />,
  },
  {
    id: 2,
    link: "/dashboard/notice",
    title: "notice",
    icon: <FiSpeaker />,
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

export const StudentTabList: StudentTabListTypes[] = [
  {
    id: 1,
    title: "personal",
  },
  {
    id: 2,
    title: "contact",
  },
  {
    id: 3,
    title: "parents",
  },
  {
    id: 4,
    title: "health",
  },
  {
    id: 4,
    title: "others",
  },
];

export const ScheduleDemo = [
  {
    day: "Monday",
    subjects: [
      { id: 1, time: "08:00 AM - 08:45 AM", subject: "Math" },
      { id: 2, time: "08:45 AM - 09:30 AM", subject: "English" },
      { id: 3, time: "09:30 AM - 10:15 AM", subject: "Science" },
      { id: 4, time: "10:15 AM - 11:00 AM", subject: "History" },
      { id: 5, time: "11:00 AM - 11:45 AM", subject: "Geography" },
      { id: 6, time: "11:45 AM - 12:30 PM", subject: "Physical Education" },
      { id: "break", time: "12:30 PM - 01:00 PM", subject: "Break" },
      { id: 7, time: "01:00 PM - 01:45 PM", subject: "Art" },
      { id: 8, time: "01:45 PM - 02:30 PM", subject: "Music" },
      { id: 9, time: "02:30 PM - 03:15 PM", subject: "Computer Science" },
      { id: 10, time: "03:15 PM - 04:00 PM", subject: "Drama" },
    ],
  },
  {
    day: "Tuesday",
    subjects: [
      { id: 11, time: "08:00 AM - 08:45 AM", subject: "Biology" },
      { id: 12, time: "08:45 AM - 09:30 AM", subject: "Chemistry" },
      { id: 13, time: "09:30 AM - 10:15 AM", subject: "Physics" },
      { id: 14, time: "10:15 AM - 11:00 AM", subject: "Mathematics" },
      { id: 15, time: "11:00 AM - 11:45 AM", subject: "Literature" },
      { id: 16, time: "11:45 AM - 12:30 PM", subject: "Economics" },
      { id: "break", time: "12:30 PM - 01:00 PM", subject: "Break" },
      { id: 17, time: "01:00 PM - 01:45 PM", subject: "Sociology" },
      { id: 18, time: "01:45 PM - 02:30 PM", subject: "Psychology" },
      { id: 19, time: "02:30 PM - 03:15 PM", subject: "Political Science" },
      { id: 20, time: "03:15 PM - 04:00 PM", subject: "Philosophy" },
    ],
  },
  {
    day: "Wednesday",
    subjects: [
      { id: 21, time: "08:00 AM - 08:45 AM", subject: "Math" },
      { id: 22, time: "08:45 AM - 09:30 AM", subject: "English" },
      { id: 23, time: "09:30 AM - 10:15 AM", subject: "Science" },
      { id: 24, time: "10:15 AM - 11:00 AM", subject: "History" },
      { id: 25, time: "11:00 AM - 11:45 AM", subject: "Geography" },
      { id: 26, time: "11:45 AM - 12:30 PM", subject: "Physical Education" },
      { id: "break", time: "12:30 PM - 01:00 PM", subject: "Break" },
      { id: 27, time: "01:00 PM - 01:45 PM", subject: "Art" },
      { id: 28, time: "01:45 PM - 02:30 PM", subject: "Music" },
      { id: 29, time: "02:30 PM - 03:15 PM", subject: "Computer Science" },
      { id: 30, time: "03:15 PM - 04:00 PM", subject: "Drama" },
    ],
  },
  {
    day: "Thursday",
    subjects: [
      { id: 31, time: "08:00 AM - 08:45 AM", subject: "Biology" },
      { id: 32, time: "08:45 AM - 09:30 AM", subject: "Chemistry" },
      { id: 33, time: "09:30 AM - 10:15 AM", subject: "Physics" },
      { id: 34, time: "10:15 AM - 11:00 AM", subject: "Mathematics" },
      { id: 35, time: "11:00 AM - 11:45 AM", subject: "Literature" },
      { id: 36, time: "11:45 AM - 12:30 PM", subject: "Economics" },
      { id: "break", time: "12:30 PM - 01:00 PM", subject: "Break" },
      { id: 37, time: "01:00 PM - 01:45 PM", subject: "Sociology" },
      { id: 38, time: "01:45 PM - 02:30 PM", subject: "Psychology" },
      { id: 39, time: "02:30 PM - 03:15 PM", subject: "Political Science" },
      { id: 40, time: "03:15 PM - 04:00 PM", subject: "Philosophy" },
    ],
  },
  {
    day: "Friday",
    subjects: [
      { id: 41, time: "08:00 AM - 08:45 AM", subject: "Math" },
      { id: 42, time: "08:45 AM - 09:30 AM", subject: "English" },
      { id: 43, time: "09:30 AM - 10:15 AM", subject: "Science" },
      { id: 44, time: "10:15 AM - 11:00 AM", subject: "History" },
      { id: 45, time: "11:00 AM - 11:45 AM", subject: "Geography" },
      { id: 46, time: "11:45 AM - 12:30 PM", subject: "Physical Education" },
      { id: "break", time: "12:30 PM - 01:00 PM", subject: "Break" },
      { id: 47, time: "01:00 PM - 01:45 PM", subject: "Art" },
      { id: 48, time: "01:45 PM - 02:30 PM", subject: "Music" },
      { id: 49, time: "02:30 PM - 03:15 PM", subject: "Computer Science" },
      { id: 50, time: "03:15 PM - 04:00 PM", subject: "Drama" },
    ],
  },
];

export const TeacherDemo: TeacherDemoTypes[] = [
  {
    id: '1',
    name: 'Jordan Mitchell',
    email: 'JordanMitchell@teleworm.us',
    address: '123 Maple Street, Springfield',
    religion: 'Christianity',
    gender: 'Male',
    phoneNumber: '+1 555-123-4567',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Emily Johnson',
    email: 'EmilyJohnson@dayrep.com',
    address: '456 Oak Avenue, Shelbyville',
    religion: 'Judaism',
    gender: 'Female',
    phoneNumber: '+1 555-234-5678',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    name: 'Michael Smith',
    email: 'MichaelSmith@jourrapide.com',
    address: '789 Pine Road, Capital City',
    religion: 'Islam',
    gender: 'Male',
    phoneNumber: '+1 555-345-6789',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: '4',
    name: 'Sophia Brown',
    email: 'SophiaBrown@teleworm.us',
    address: '321 Birch Lane, Ogdenville',
    religion: 'Hinduism',
    gender: 'Female',
    phoneNumber: '+1 555-456-7890',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: '5',
    name: 'James Williams',
    email: 'JamesWilliams@dayrep.com',
    address: '654 Cedar Court, North Haverbrook',
    religion: 'Buddhism',
    gender: 'Male',
    phoneNumber: '+1 555-567-8901',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: '6',
    name: 'Ava Davis',
    email: 'AvaDavis@jourrapide.com',
    address: '987 Willow Drive, Brockway',
    religion: 'Atheism',
    gender: 'Female',
    phoneNumber: '+1 555-678-9012',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: '7',
    name: 'William Martinez',
    email: 'WilliamMartinez@teleworm.us',
    address: '159 Elm Street, Springfield',
    religion: 'Christianity',
    gender: 'Male',
    phoneNumber: '+1 555-789-0123',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: '8',
    name: 'Mia Hernandez',
    email: 'MiaHernandez@dayrep.com',
    address: '753 Maple Avenue, Shelbyville',
    religion: 'Judaism',
    gender: 'Female',
    phoneNumber: '+1 555-890-1234',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: '9',
    name: 'Alexander Martinez',
    email: 'AlexanderMartinez@jourrapide.com',
    address: '852 Oak Lane, Capital City',
    religion: 'Islam',
    gender: 'Male',
    phoneNumber: '+1 555-901-2345',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: '10',
    name: 'Isabella Gonzalez',
    email: 'IsabellaGonzalez@teleworm.us',
    address: '741 Pine Street, Ogdenville',
    religion: 'Hinduism',
    gender: 'Female',
    phoneNumber: '+1 555-012-3456',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
  }
];

