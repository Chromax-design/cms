export interface LinkTypes {
  id: number;
  link: string;
  title: string;
  icon: React.ReactNode;
}

export interface NoticeTypes {
  id: number;
  title: string;
  date: string | Date;
  description: string;
}

export interface StudentTabListTypes {
  id: number;
  title: "personal" | "contact" | "parents" | "health" | "others";
}

export interface TeacherDemoTypes {
  id: string;
  avatar: string;
  name: string;
  email: string;
  address: string;
  religion: string;
  gender: string;
  phoneNumber: string;
  subject: string
}

export interface CoursesDemoTypes{
  id: string | number,
  course: string,
  teacher: string,
  type: 'mandatory' | 'elective'
}

export interface AssignmentDemoTypes{
  id: string,
  title: string;
  description: string;
  deadline: Date | string;
  course: string;
  teacher: string;
}

export interface VirtualDemoTypes {
  id: string;
  title: string;
  description: string;
  host: string;
  course: string;
  time: string;
  venue: string;
  link: string
}