"use client"

import * as React from "react"
import { type getEduQuizzes } from "@/actions/edu-quiz"

import { useDataTable } from "@/hooks/use-data-table"
import { DataTable } from "@/components/data-table/data-table"
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar"

import { getColumns } from "./edu-quiz-table-columns"
import { EduQuizTableToolbarActions } from "./edu-quiz-table-toolbar-actions"

interface EduQuizTableProps {
  eduQuizPromise: ReturnType<typeof getEduQuizzes>
}

export function EduQuizTable({ eduQuizPromise }: EduQuizTableProps) {
  const { eduQuizzes, pageCount = 1 } = React.use(eduQuizPromise)
  const columns = React.useMemo(() => getColumns(), [])

  const { table } = useDataTable({
    data: eduQuizzes,
    columns,
    pageCount,
    defaultPerPage: 10,
    defaultSort: "createdAt.desc",
  })

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="max-w-auto space-y-2.5 overflow-auto">
      <DataTableToolbar table={table}>
        <EduQuizTableToolbarActions table={table} />
      </DataTableToolbar>
      <DataTable table={table} />
    </div>
  )
}
