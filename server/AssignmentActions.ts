"use server";

import { AssignmentDemo } from "@/data/dashboard";
import { AssignmentDemoTypes } from "@/data/dashboard/types";

export const getAllAssignments = async (): Promise<AssignmentDemoTypes[]> => {
  return AssignmentDemo;
};

export const getAssignmentDetails = async (
  id: string
): Promise<AssignmentDemoTypes | null> => {
  const assignmentDetails = AssignmentDemo.find(
    (assignment) => assignment.id === id
  );
  return assignmentDetails
    ? Promise.resolve(assignmentDetails)
    : Promise.resolve(null);
};
