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
