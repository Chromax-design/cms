import { string } from "zod";

export const getInitials = (name: string) => {
  const nameParts = name.split(" ");
  const initials = nameParts.map((part) => part.charAt(0)).join("");
  return initials.slice(0, 2);
};


export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: {} = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
