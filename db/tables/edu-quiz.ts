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
  socialMediaLink: varchar("social_media_link", { length: 255 }).notNull(),
  isStudent: boolean("is_student").notNull(),
  isAfrican: boolean("is_african").notNull(),
  hasActiveSocialMedia: boolean("has_active_social_media").notNull(),
  agreeToShare: boolean("agree_to_share").notNull(),
  agreeToSubmitLink: boolean("agree_to_submit_link").notNull(),
  agreeToRules: boolean("agree_to_rules").notNull(),
  hearAboutEduQuiz: varchar("hear_about_edu_quiz", { length: 255 })
    .default("NoResponse")
    .notNull(),
  digitalSignature: varchar("digital_signature", { length: 255 }).notNull(),
  createdAt: date("created_at").defaultNow(),
  updatedAt: date("updated_at").defaultNow(),
  deletedAt: date("deleted_at"),
})

export { eduQuiz }
