import { NextResponse } from "next/server"

export async function POST(request: Request) {
  console.log("Starting POST request for support")

  try {
    const body = await request.json()
    console.log("Request body:", body)

    // Simulate processing the support request
    console.log("Processing support request...")

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000)) // 1 second delay
    console.log("Support request processed")

    return NextResponse.json({ message: "Message received" }, { status: 200 })
  } catch (err) {
    console.error("Error processing support request:", err)
    return new NextResponse(null, { status: 500 })
  }
}
