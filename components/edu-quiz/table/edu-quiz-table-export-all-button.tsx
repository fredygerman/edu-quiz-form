"use client"

import * as React from "react"
import { getAllEduQuizzes } from "@/actions/edu-quiz"
import { DownloadIcon } from "@radix-ui/react-icons"
import { toast } from "sonner"

import { exportAllEduQuizzes } from "@/lib/export-all"
import { Button } from "@/components/ui/button"

export function EduQuizTableExportAllButton() {
  async function handleExportAll() {
    toast.promise(
      (async () => {
        console.log("Exporting all quizzes")
        const allQuizzes = await getAllEduQuizzes()
        exportAllEduQuizzes(allQuizzes)
        console.log("Export completed")
      })(),
      {
        loading: "Exporting all quizzes...",
        success: "Export completed successfully 🎉",
        error: "Failed to export quizzes 😢",
      }
    )
  }

  return (
    <Button variant="outline" size="sm" onClick={handleExportAll}>
      <DownloadIcon className="mr-2 size-4" aria-hidden="true" />
      Export ALL
    </Button>
  )
}
