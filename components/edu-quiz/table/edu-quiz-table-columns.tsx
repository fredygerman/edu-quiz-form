"use client"

import * as React from "react"
import { type eduQuiz } from "@/db/schema"
import { type ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"

export function getColumns(): ColumnDef<typeof eduQuiz.$inferSelect>[] {
  return [
    {
      accessorKey: "firstName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="First Name" />
      ),
      cell: ({ row }) => <div>{row.original.firstName}</div>,
      enableSorting: true,
    },
    {
      accessorKey: "lastName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Last Name" />
      ),
      cell: ({ row }) => <div>{row.original.lastName}</div>,
      enableSorting: true,
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
      cell: ({ row }) => <div>{row.original.email}</div>,
      enableSorting: true,
    },
    {
      accessorKey: "phone",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Phone" />
      ),
      cell: ({ row }) => <div>{row.original.phone}</div>,
      enableSorting: true,
    },
    {
      accessorKey: "nationality",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nationality" />
      ),
      cell: ({ row }) => <div>{row.original.nationality}</div>,
      enableSorting: true,
    },
    {
      accessorKey: "institution",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Institution" />
      ),
      cell: ({ row }) => <div>{row.original.institution}</div>,
      enableSorting: true,
    },
    {
      accessorKey: "courseOfStudy",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Course of Study" />
      ),
      cell: ({ row }) => <div>{row.original.courseOfStudy}</div>,
      enableSorting: true,
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Created At" />
      ),
      cell: ({ row }) => <div>{row.original.createdAt ? new Date(row.original.createdAt).toLocaleDateString() : "-"}</div>,
      enableSorting: true,
    }
  ]
}
