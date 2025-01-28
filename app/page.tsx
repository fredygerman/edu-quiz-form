import Image from "next/image"

import EduQuizForm from "@/components/form/edu-quiz-form"

export default function Page() {
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
