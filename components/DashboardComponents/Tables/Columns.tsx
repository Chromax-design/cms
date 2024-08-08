"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  AssignmentDemoTypes,
  CoursesDemoTypes,
  NoticeTypes,
  TeacherDemoTypes,
  VirtualDemoTypes,
} from "@/data/dashboard/types";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate, getInitials } from "@/lib/utilities";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { FaDownload, FaEye } from "react-icons/fa";


export const VirtualColumns: ColumnDef<VirtualDemoTypes>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <div className=" min-w-28">{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return <div className=" min-w-48">{row.getValue("description")}</div>;
    },
  },
  {
    accessorKey: "course",
    header: "Course",
    cell: ({ row }) => {
      return <div className=" min-w-28">{row.getValue("course")}</div>;
    },
  },
  {
    accessorKey: "host",
    header: "Host",
    cell: ({ row }) => {
      return <div className=" min-w-28">{row.getValue("host")}</div>;
    },
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => {
      const data = row.original;
      const time = formatDate(data.time);
      return <div className=" min-w-28">{time}</div>;
    },
  },
  {
    accessorKey: "venue",
    header: "Venue",
    cell: ({ row }) => {
      return <div className=" min-w-28">{row.getValue("venue")}</div>;
    },
  },
  {
    accessorKey: "link",
    header: "Virtual Link",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <a
          href={`${data.link}`}
          target="_blank"
          className="inline-block min-w-24 underline capitalize"
        >
          <Button variant={"outline"}>Join</Button>
        </a>
      );
    },
  },
];

export const TeacherColumns: ColumnDef<TeacherDemoTypes>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "avatar",
    header: "Photo",
    cell: ({ row }) => {
      const data = row.original;
      const name = data.name;
      const fallBack = getInitials(name);
      return (
        <Avatar>
          <AvatarImage src={data.avatar} />
          <AvatarFallback>{fallBack}</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className=" min-w-48">{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <Link href={`/dashboard/teachers/${data.id}`}>
          <FaEye className="text-lg text-primary" title="view" />
        </Link>
      );
    },
  },
];

export const NoticeColumns: ColumnDef<NoticeTypes>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <div className=" min-w-48">{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return <div className="min-w-28">{row.getValue("date")}</div>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return <div className=" min-w-64">{row.getValue("description")}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <Link href={`/dashboard/notices/${data.id}`}>
          <FaEye className="text-lg text-primary" title="view" />
        </Link>
      );
    },
  },
];

export const CoursesColumns: ColumnDef<CoursesDemoTypes>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "course",
    header: "Course",
    cell: ({ row }) => {
      return <div className=" min-w-48">{row.getValue("course")}</div>;
    },
  },
  {
    accessorKey: "teacher",
    header: "Teacher",
    cell: ({ row }) => {
      return <div className=" min-w-48">{row.getValue("teacher")}</div>;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      return <div className=" min-w-48">{row.getValue("type")}</div>;
    },
  },
  {
    accessorKey: "syllablus",
    header: "Syllabus",
    cell: ({ row }) => {
      return (
        <Button
          variant="secondary"
        >
          Download
          <FaDownload className="ml-2 h-4 w-4"  />
        </Button>
      );
    },
  },
];

export const AssignmentColumns: ColumnDef<AssignmentDemoTypes>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <div className=" min-w-28">{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return <div className=" min-w-fit">{row.getValue("description")}</div>;
    },
  },
  {
    accessorKey: "teacher",
    header: "Teacher",
    cell: ({ row }) => {
      return <div className=" min-w-28">{row.getValue("teacher")}</div>;
    },
  },
  {
    accessorKey: "course",
    header: "Course",
    cell: ({ row }) => {
      return <div className=" min-w-28">{row.getValue("course")}</div>;
    },
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
    cell: ({ row }) => {
      return <div className=" min-w-20">{row.getValue("deadline")}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <Link href={`/dashboard/assignment/${data.id}`}>
          <FaEye className="text-lg text-primary" title="view" />
        </Link>
      );
    },
  },
];
