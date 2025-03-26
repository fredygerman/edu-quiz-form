import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import EduQuizForm from "@/components/form/edu-quiz-form"

const isSubmissionsEnabled =
  process.env.NEXT_PUBLIC_ENABLE_SUBMISSIONS !== "false"

function SubmissionsClosed() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 rounded-full bg-amber-100 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-12 text-amber-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h2 className="mb-3 text-3xl font-bold text-foreground">
        Submissions Closed
      </h2>
      <p className="mb-6 max-w-md text-muted-foreground">
        Thank you for your interest. The submission period has ended. Please
        check back later for future opportunities.
      </p>
      <Link href="https://edukateafrica.com/">
        <Button className="rounded px-4 py-2">Go to Edukate Platform </Button>
      </Link>
    </div>
  )
}

export default function Page() {
  if (!isSubmissionsEnabled) {
    return <SubmissionsClosed />
  }
  return (
    <div className="h-full bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="lg:flex">
          <div className="overflow-y-auto p-8 sm:px-10 lg:w-3/4 lg:px-12">
            <EduQuizForm />
            <p className="pt-2 text-xs">
              <a href="https://www.freepik.com/free-photo/group-people-standing-park-sunlight-with-blurry-background_10582970.htm#fromView=search&page=1&position=2&uuid=9fbd9f4e-6693-4a69-a3d7-b1c90a978770&query=college+students+standing+">
                Image by wirestock on Freepik
              </a>
            </p>
          </div>
          <div className="relative hidden lg:block lg:w-1/2">
            <div className="sticky top-0 h-screen">
              <Image
                src="/images/quiz-image.jpg"
                alt="Students with books"
                layout="fill"
                className="absolute inset-0 rounded-lg py-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
