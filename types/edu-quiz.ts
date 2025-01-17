import { z } from "zod"

export const EduQuizFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  dateOfBirth: z.date({
    required_error: "A date of birth is required.",
    invalid_type_error: "That's not a valid date!",
  }),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  nationality: z.string().min(1, "Please select a nationality."),
  residence: z.string().min(1, "Please select a country of residence."),
  institution: z
    .string()
    .min(2, "Institution name must be at least 2 characters."),
  courseOfStudy: z.string().min(1, "Please select a course of study."),
  yearOfStudy: z.string().min(1, "Please select a year of study."),
  linkedin: z
    .string()
    .url("Invalid LinkedIn URL.")
    .optional()
    .or(z.literal("")),
  instagram: z
    .string()
    .url("Invalid Instagram URL.")
    .optional()
    .or(z.literal("")),
  twitter: z.string().url("Invalid Twitter URL.").optional().or(z.literal("")),
  facebook: z
    .string()
    .url("Invalid Facebook URL.")
    .optional()
    .or(z.literal("")),
  isStudent: z.boolean(),
  isAfrican: z.boolean(),
  hasSocialMedia: z.boolean(),
  commitToSharing: z.boolean(),
  agreeToRules: z.boolean(),
  digitalSignature: z
    .string()
    .min(2, "Digital signature must be at least 2 characters."),
})

export type EduQuizFormData = z.infer<typeof EduQuizFormSchema>
