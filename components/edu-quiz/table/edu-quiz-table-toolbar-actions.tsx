"use client"

import * as React from "react"
import { type eduQuiz } from "@/db/tables/edu-quiz"
import { DownloadIcon } from "@radix-ui/react-icons"
import { type Table } from "@tanstack/react-table"

import { exportTableToCSV } from "@/lib/export"
import { Button } from "@/components/ui/button"

interface EduQuizTableToolbarActionsProps {
  table: Table<typeof eduQuiz.$inferSelect>
}

export function EduQuizTableToolbarActions({
  table,
}: EduQuizTableToolbarActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          exportTableToCSV(table, {
            filename: "edu_quizzes",
            excludeColumns: ["select", "actions"],
          })
        }
      >
        <DownloadIcon className="mr-2 size-4" aria-hidden="true" />
        Export
      </Button>
    </div>
  )
}
