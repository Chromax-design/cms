import { z } from "zod";

export interface socialType {
  id: number;
  alt: string;
  icon: React.ReactElement;
  href: string;
}

export interface navLinkType {
  id: number;
  title: string;
  href: string;
}

export interface featureType {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactElement;
}

export interface aboutPageTextType {
  id: number;
  subtitle?: string;
  title: string;
  desc: string;
  img: string;
  showButton?: boolean;
}

export interface contactsType {
  id: number;
  icon: React.ReactElement;
  desc: string;
  title?: string;
  link?: string;
}

export interface featuresPageTypes {
  id: number;
  img: string;
  title: string;
  desc: string;
}

export interface faqsType {
  id: number;
  question: string;
  answer: string;
}

export interface supportTypes {
  id: number;
  title: string;
  desc: string;
  isWhat?: "contact" | "support" | 'feedback';
  img: string
}

export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .min(7, { message: "Password should be at least 7 characters long" }),
});

export type SiteMetaDataTypes = {
  title: string;
  author: string;
  headerTitle: string;
  description: string;
  language: string;
  theme: string;
  siteUrl: string;
  siteLogo: string;
  socialBanner: string;
  email: string;
  github: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  locale: string;
};