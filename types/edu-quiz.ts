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
  socialMediaLink: z
    .string()
    .url("Please enter a valid URL for your most active social media account.")
    .min(1, "Please provide your most active social media account link."),
  isStudent: z.boolean().refine((val) => val === true, {
    message: "You must confirm that you are a student",
  }),
  isAfrican: z.boolean().refine((val) => val === true, {
    message: "You must confirm that you are of African descent",
  }),
  hasActiveSocialMedia: z.boolean().refine((val) => val === true, {
    message:
      "You must confirm that you have at least one active social media account",
  }),
  agreeToShare: z.boolean().refine((val) => val === true, {
    message: "You must agree to share the flyer on your social media account",
  }),
  agreeToSubmitLink: z.boolean().refine((val) => val === true, {
    message:
      "You must agree to submit your social media account link for verification",
  }),
  agreeToRules: z.boolean().refine((val) => val === true, {
    message:
      "You must confirm that you are eligible and agree to the competition rules",
  }),
  hearAboutEduQuiz: z
    .string()
    .min(1, "Please select how you heard about EduQuiz."),
  digitalSignature: z
    .string()
    .min(2, "Digital signature must be at least 2 characters."),
})

export type EduQuizFormData = z.infer<typeof EduQuizFormSchema>
