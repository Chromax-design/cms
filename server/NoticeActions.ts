import { NoticeDemo } from "@/data/dashboard";
import { NoticeTypes } from "@/data/dashboard/types";

export const getNotices = async (): Promise<NoticeTypes[]> => {
  return NoticeDemo;
};

export const getSingleNotice = async (
  id: string
): Promise<NoticeTypes | null> => {
  const data = NoticeDemo.find((notice) => notice.id === parseInt(id, 10));
  return data ? Promise.resolve(data) : Promise.resolve(null);
};
