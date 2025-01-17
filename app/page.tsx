import Image from "next/image"

import EduQuizForm from "@/components/form/edu-quiz-form"

export default function Page() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <Image
          src="/images/quiz-image.png"
          alt="Students with books"
          width={600}
          height={950}
          className="sticky top-0 pt-6 lg:pt-8"
        />
      </div>
      <EduQuizForm />
    </div>
  )
}
