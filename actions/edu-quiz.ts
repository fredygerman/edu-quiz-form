"use server"

import { db } from "@/db"
import { eduQuiz } from "@/db/tables/edu-quiz"
import { and, count, sql } from "drizzle-orm"

import { type EduQuizFormData } from "@/types/edu-quiz"

// Function to get all edu quizzes with pagination and filters
export async function getEduQuizzes(queryParams: {
  page: number
  per_page: number
  sort: string
  firstName: string
  lastName: string
  email: string
  from: string
  to: string
}): Promise<{
  eduQuizzes: (typeof eduQuiz.$inferSelect)[]
  pageCount: number
}> {
  const { page, per_page, sort, firstName, lastName, email, from, to } =
    queryParams
  const offset = (page - 1) * per_page

  const filters = [
    firstName
      ? sql`${eduQuiz.firstName} ILIKE ${"%" + firstName + "%"}`
      : undefined,
    lastName
      ? sql`${eduQuiz.lastName} ILIKE ${"%" + lastName + "%"}`
      : undefined,
    email ? sql`${eduQuiz.email} ILIKE ${"%" + email + "%"}` : undefined,
    from ? sql`${eduQuiz.createdAt} >= ${from}` : undefined,
    to ? sql`${eduQuiz.createdAt} <= ${to}` : undefined,
  ].filter(Boolean)

  const [eduQuizList, totalCount] = await Promise.all([
    db
      .select()
      .from(eduQuiz)
      .where(and(...filters))
      .orderBy(sql`${sort}`)
      .limit(per_page)
      .offset(offset)
      .execute(),
    countEduQuizzes(),
  ])

  const pageCount = Math.ceil(totalCount / per_page)

  return { eduQuizzes: eduQuizList, pageCount }
}

// Function to count edu quizzes
export async function countEduQuizzes() {
  const result = await db.select({ count: count() }).from(eduQuiz).execute()
  return result[0].count
}

export async function eduQuizSignUp(data: EduQuizFormData): Promise<{
  success: boolean
  quiz?: typeof eduQuiz.$inferSelect
  error?: string
}> {
  try {
    const createdQuiz = await db
      .insert(eduQuiz)
      .values({
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth.toISOString(),
        email: data.email,
        phone: data.phone,
        nationality: data.nationality,
        residence: data.residence,
        institution: data.institution,
        courseOfStudy: data.courseOfStudy,
        yearOfStudy: data.yearOfStudy,
        linkedin: data.linkedin,
        instagram: data.instagram,
        twitter: data.twitter,
        facebook: data.facebook,
        isStudent: data.isStudent,
        isAfrican: data.isAfrican,
        hasSocialMedia: data.hasSocialMedia,
        commitToSharing: data.commitToSharing,
        agreeToRules: data.agreeToRules,
        digitalSignature: data.digitalSignature,
      })
      .returning()
      .execute()

    // delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return {
      success: true,
      quiz: createdQuiz[0],
    }
  } catch (error) {
    return {
      success: false,
      error:
        (error as any).message ||
        "An error occurred while submitting your entry.",
    }
  }
}
