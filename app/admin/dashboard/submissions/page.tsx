import React from "react"
import Link from "next/link"
import { getEduQuizzes } from "@/actions/edu-quiz"

import { siteConfig } from "@/config/site" // Import siteConfig

import { eduQuizSearchParamsCache } from "@/lib/validators"
import { Button } from "@/components/ui/button"
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton"
import { EduQuizTable } from "@/components/edu-quiz/table/edu-quiz-table"
import { EduQuizTableProvider } from "@/components/edu-quiz/table/edu-quiz-table-provider"

export interface SearchParams {
  [key: string]: string | string[] | undefined
}

interface PageProps {
  searchParams: Promise<SearchParams>
}

export default async function QuizzesPage(props: PageProps) {
  const searchParams = await props.searchParams
  const queryParams = {
    ...eduQuizSearchParamsCache.parse(searchParams),
    from: Array.isArray(searchParams.from)
      ? searchParams.from[0]
      : searchParams.from || "",
    to: Array.isArray(searchParams.to)
      ? searchParams.to[0]
      : searchParams.to || "",
  }
  console.log("goodQueryParams", queryParams)
  const eduQuizPromise = getEduQuizzes(queryParams)

  return (
    <div className="flex min-h-screen w-full flex-col p-2">
      <header className="text-center text-xl font-bold">
        {siteConfig.title} Dashboard
      </header>
      <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="flex auto-rows-max items-end justify-end gap-4 md:gap-8 lg:col-span-2">
          <Link href="/">
            <Button className="mb-4 rounded bg-blue-500 px-4 py-2 text-white">
              Add Quiz
            </Button>
          </Link>
        </div>
        <EduQuizTableProvider>
          <React.Suspense
            fallback={
              <DataTableSkeleton
                columnCount={3}
                searchableColumnCount={2}
                filterableColumnCount={1}
                cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
                shrinkZero
              />
            }
          >
            <EduQuizTable eduQuizPromise={eduQuizPromise} />
          </React.Suspense>
        </EduQuizTableProvider>
      </main>
    </div>
  )
}
