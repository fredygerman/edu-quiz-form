"use server"

import { db } from "@/db"
import { users } from "@/db/tables/user"
import { eq } from "drizzle-orm"

export async function createUser(data: {
  email: string
  fullName: string
  picture: string
}) {
  const createdUser = await db
    .insert(users)
    .values({
      email: data.email,
      name: data.fullName,
      picture: data.picture,
      role: "user",
      isActive: true,
    })
    .returning()
    .execute()
  return createdUser[0]
}

export async function getUserByEmail(email: string) {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .execute()
  return user[0]
}

export async function updateUserProfile(
  email: string,
  data: { picture: string; name: string }
) {
  await db.update(users).set(data).where(eq(users.email, email)).execute()
}
