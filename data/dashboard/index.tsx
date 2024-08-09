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
  AssignmentDemoTypes,
  CoursesDemoTypes,
  LinkTypes,
  NoticeTypes,
  StudentTabListTypes,
  TeacherDemoTypes,
  VirtualDemoTypes,
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
  // {
  //   id: 6,
  //   link: "/dashboard/attendance",
  //   title: "attendance",
  //   icon: <FiCheckSquare />,
  // },
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
    link: "/dashboard/notices",
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
    subject: 'Mathematics',
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
    subject: 'Science',
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
    subject: 'History',
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
    subject: 'English',
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
    subject: 'Physical Education',
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
    subject: 'Music',
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
    subject: 'Art',
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
    subject: 'Geography',
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
    subject: 'Chemistry',
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
    subject: 'Biology',
  }
];

export const CoursesDemo: CoursesDemoTypes[] = [
  {
    id: 1,
    course: 'Mathematics',
    teacher: 'John Doe',
    type: 'mandatory'
  },
  {
    id: 2,
    course: 'English Literature',
    teacher: 'Jane Smith',
    type: 'mandatory'
  },
  {
    id: 3,
    course: 'Biology',
    teacher: 'Emily Johnson',
    type: 'mandatory'
  },
  {
    id: 4,
    course: 'Chemistry',
    teacher: 'Michael Brown',
    type: 'mandatory'
  },
  {
    id: 5,
    course: 'Physics',
    teacher: 'Chris Lee',
    type: 'mandatory'
  },
  {
    id: 6,
    course: 'History',
    teacher: 'Sarah Davis',
    type: 'mandatory'
  },
  {
    id: 7,
    course: 'Physical Education',
    teacher: 'David Wilson',
    type: 'mandatory'
  },
  {
    id: 8,
    course: 'Art',
    teacher: 'Anna Martinez',
    type: 'elective'
  },
  {
    id: 9,
    course: 'Music',
    teacher: 'James Anderson',
    type: 'elective'
  },
  {
    id: 10,
    course: 'Computer Science',
    teacher: 'Patricia Thomas',
    type: 'mandatory'
  }
];

export const AssignmentDemo: AssignmentDemoTypes[] = [
  {
    id: '1',
    title: 'Algebra Homework',
    description: 'Complete the set of algebra problems from the textbook.',
    deadline: '2024-09-10',
    course: 'Mathematics',
    teacher: 'John Doe'
  },
  {
    id: '2',
    title: 'Essay on Shakespeare',
    description: 'Write a 1000-word essay on the themes of Shakespeare\'s Hamlet.',
    deadline: '2024-09-15',
    course: 'English Literature',
    teacher: 'Jane Smith'
  },
  {
    id: '3',
    title: 'Lab Report: Photosynthesis',
    description: 'Submit a detailed lab report on the photosynthesis experiment conducted in class.',
    deadline: '2024-09-20',
    course: 'Biology',
    teacher: 'Emily Johnson'
  },
  {
    id: '4',
    title: 'Periodic Table Assignment',
    description: 'Complete the periodic table worksheet and answer the related questions.',
    deadline: '2024-09-25',
    course: 'Chemistry',
    teacher: 'Michael Brown'
  },
  {
    id: '5',
    title: 'Physics Project',
    description: 'Build a simple circuit and explain its working principles.',
    deadline: '2024-09-30',
    course: 'Physics',
    teacher: 'Chris Lee'
  },
  {
    id: '6',
    title: 'Historical Event Analysis',
    description: 'Analyze a significant historical event and its impact on modern society.',
    deadline: '2024-10-05',
    course: 'History',
    teacher: 'Sarah Davis'
  },
  {
    id: '7',
    title: 'Fitness Log',
    description: 'Maintain a fitness log for two weeks and submit your progress report.',
    deadline: '2024-10-10',
    course: 'Physical Education',
    teacher: 'David Wilson'
  },
  {
    id: '8',
    title: 'Art Portfolio',
    description: 'Create an art portfolio with at least 5 different pieces of artwork.',
    deadline: '2024-10-15',
    course: 'Art',
    teacher: 'Anna Martinez'
  },
  {
    id: '9',
    title: 'Music Composition',
    description: 'Compose a short piece of music and present it to the class.',
    deadline: '2024-10-20',
    course: 'Music',
    teacher: 'James Anderson'
  },
  {
    id: '10',
    title: 'Programming Assignment',
    description: 'Develop a simple web application using HTML, CSS, and JavaScript.',
    deadline: '2024-10-25',
    course: 'Computer Science',
    teacher: 'Patricia Thomas'
  }
];

export const VirtualDemo = [
  {
    id: '1',
    title: 'Algebra Basics',
    description: 'Introduction to basic algebra concepts.',
    course: 'Mathematics',
    host: 'John Doe',
    link: 'https://meet.google.com/algebra-basics',
    time: '2024-09-10T10:00:00Z',
    venue: 'Google Meet'
  },
  {
    id: '2',
    title: 'Shakespeare\'s Hamlet',
    description: 'In-depth analysis of Shakespeare\'s Hamlet.',
    course: 'English Literature',
    host: 'Jane Smith',
    link: 'https://zoom.us/j/1234567890',
    time: '2024-09-11T14:00:00Z',
    venue: 'Zoom'
  },
  {
    id: '3',
    title: 'Photosynthesis Process',
    description: 'Detailed explanation of the photosynthesis process.',
    course: 'Biology',
    host: 'Emily Johnson',
    link: 'https://meet.google.com/photosynthesis-process',
    time: '2024-09-12T09:00:00Z',
    venue: 'Google Meet'
  },
  {
    id: '4',
    title: 'Understanding the Periodic Table',
    description: 'Comprehensive guide to the periodic table and its elements.',
    course: 'Chemistry',
    host: 'Michael Brown',
    link: 'https://zoom.us/j/0987654321',
    time: '2024-09-13T11:00:00Z',
    venue: 'Zoom'
  },
  {
    id: '5',
    title: 'Basics of Circuit Building',
    description: 'Learn how to build simple electrical circuits.',
    course: 'Physics',
    host: 'Chris Lee',
    link: 'https://meet.google.com/basics-circuit-building',
    time: '2024-09-14T13:00:00Z',
    venue: 'Google Meet'
  },
  {
    id: '6',
    title: 'Analyzing Historical Events',
    description: 'Discussion on significant historical events and their impact.',
    course: 'History',
    host: 'Sarah Davis',
    link: 'https://zoom.us/j/1122334455',
    time: '2024-09-15T15:00:00Z',
    venue: 'Zoom'
  },
  {
    id: '7',
    title: 'Fitness and Wellness',
    description: 'Tips and exercises for maintaining fitness and wellness.',
    course: 'Physical Education',
    host: 'David Wilson',
    link: 'https://meet.google.com/fitness-wellness',
    time: '2024-09-16T10:00:00Z',
    venue: 'Google Meet'
  },
  {
    id: '8',
    title: 'Art Techniques',
    description: 'Learn various art techniques and create beautiful artwork.',
    course: 'Art',
    host: 'Anna Martinez',
    link: 'https://zoom.us/j/2233445566',
    time: '2024-09-17T14:00:00Z',
    venue: 'Zoom'
  },
  {
    id: '9',
    title: 'Music Composition',
    description: 'Basics of composing music and creating melodies.',
    course: 'Music',
    host: 'James Anderson',
    link: 'https://meet.google.com/music-composition',
    time: '2024-09-18T09:00:00Z',
    venue: 'Google Meet'
  },
  {
    id: '10',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of web development using HTML, CSS, and JavaScript.',
    course: 'Computer Science',
    host: 'Patricia Thomas',
    link: 'https://zoom.us/j/3344556677',
    time: '2024-09-19T11:00:00Z',
    venue: 'Zoom'
  }
];

