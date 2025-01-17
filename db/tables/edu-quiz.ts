import { sql } from "drizzle-orm"
import { boolean, date, pgTable, uuid, varchar } from "drizzle-orm/pg-core"

const eduQuiz = pgTable("edu_quiz", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`)
    .notNull(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  dateOfBirth: date("date_of_birth").notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  nationality: varchar("nationality", { length: 255 }).notNull(),
  residence: varchar("residence", { length: 255 }).notNull(),
  institution: varchar("institution", { length: 255 }).notNull(),
  courseOfStudy: varchar("course_of_study", { length: 255 }).notNull(),
  yearOfStudy: varchar("year_of_study", { length: 255 }).notNull(),
  linkedin: varchar("linkedin", { length: 255 }),
  instagram: varchar("instagram", { length: 255 }),
  twitter: varchar("twitter", { length: 255 }),
  facebook: varchar("facebook", { length: 255 }),
  isStudent: boolean("is_student").notNull(),
  isAfrican: boolean("is_african").notNull(),
  hasSocialMedia: boolean("has_social_media").notNull(),
  commitToSharing: boolean("commit_to_sharing").notNull(),
  agreeToRules: boolean("agree_to_rules").notNull(),
  digitalSignature: varchar("digital_signature", { length: 255 }).notNull(),
  createdAt: date("created_at").defaultNow(),
  updatedAt: date("updated_at").defaultNow(),
  deletedAt: date("deleted_at"),
})

export { eduQuiz }
