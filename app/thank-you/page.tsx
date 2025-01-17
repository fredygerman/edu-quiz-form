import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 pt-20">
      <Card className="w-full max-w-md pt-4">
        <CardContent className="text-center">
          <div className="mb-4 flex justify-center">
            <CheckCircle className="size-16 text-green-500" />
          </div>
          <h1 className="mb-2 text-2xl font-bold">
            Thank You for Your Submission!
          </h1>
          <p className="mb-4 text-gray-600">
            We appreciate your effort and time. Your submission has been
            received successfully.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
