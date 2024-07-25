"use server";

import { TeacherDemo } from "@/data/dashboard";
import { TeacherDemoTypes } from "@/data/dashboard/types";

export const getTeachers = async (): Promise<TeacherDemoTypes[]> => {
  return TeacherDemo;
};

export const getSingleTeacher = async (
  id: string
): Promise<TeacherDemoTypes | null> => {
  const data = TeacherDemo.find((teacher) => teacher.id === id);
  return data ? Promise.resolve(data) : Promise.resolve(null);
};
