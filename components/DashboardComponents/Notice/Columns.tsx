"use client";

import { ColumnDef } from "@tanstack/react-table";
import { NoticeTypes } from "@/data/dashboard/types";
import Link from "next/link";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { FaEye } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Columns: ColumnDef<NoticeTypes>[] = [
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
      )
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
        <Link href={`/dashboard/notice/${data.id}`}>
          <FaEye className="text-lg text-slate-600" title="view"/>
        </Link>
      );
    },
  },
];

/*
Columns are where you define the core of what your table will look like. They define the data that will be displayed, how it will be formatted, sorted and filtered.
*/
