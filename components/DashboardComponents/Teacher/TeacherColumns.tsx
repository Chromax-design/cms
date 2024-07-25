"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TeacherDemoTypes } from "@/data/dashboard/types";
import Link from "next/link";
import { ArrowUpDown } from "lucide-react";
import { FaEye } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utitlities";

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

/*
Columns are where you define the core of what your table will look like. They define the data that will be displayed, how it will be formatted, sorted and filtered.
*/
