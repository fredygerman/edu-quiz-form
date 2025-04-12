"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { eduQuizSignUp } from "@/actions/edu-quiz"
import { countries } from "@/data/countries"
import { nationalities } from "@/data/nationalities"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { EduQuizFormSchema, type EduQuizFormData } from "@/types/edu-quiz"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ShadcnDatePicker from "@/components/shadcn-date-picker"

export default function EduQuizForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<EduQuizFormData>({
    resolver: zodResolver(EduQuizFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(),
      email: "",
      phone: "",
      nationality: "",
      residence: "",
      institution: "",
      courseOfStudy: "",
      yearOfStudy: "",
      socialMediaLink: "",
      hearAboutEduQuiz: "",
      digitalSignature: "",
      // Eligibility criteria
      isStudent: false,
      isAfrican: false,
      hasActiveSocialMedia: false,
      agreeToShare: false,
      agreeToSubmitLink: false,
      agreeToRules: false,
    },
  })

  const router = useRouter()

  const onSubmit = async (data: EduQuizFormData) => {
    setIsSubmitting(true)
    toast.promise(
      (async () => {
        const response = await eduQuizSignUp(data)
        if (response.success) {
          setIsSubmitting(false)
          router.push(`/thank-you`)
          return "Quiz created successfully 🎉"
        } else {
          setIsSubmitting(false)
          throw new Error(response.error || "Failed to create quiz 😢")
        }
      })(),
      {
        loading: "Please wait, Submitting your response...",
        success: "Quiz created successfully 🎉",
        error: (error) => `${error}`,
      }
    )
  }

  return (
    <div className="rounded-lg p-8 shadow dark:bg-gray-800">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">EDUQUIZ SIGN UP</h2>
        <Image
          src="/images/edu-space-logo.png"
          alt="Students with books"
          width={150}
          height={150}
          className="pt-8"
        />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of birth</FormLabel>
                  <FormControl>
                    <ShadcnDatePicker
                      startYear={1930}
                      endYear={new Date().getFullYear()}
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a nationality" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {nationalities.map((nationality) => (
                        <SelectItem key={nationality} value={nationality}>
                          {nationality}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="residence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country of residence</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Academic Information</h2>
            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Educational institution</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your educational institution"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="courseOfStudy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course of study</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your course of study"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="yearOfStudy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year of study</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">First Year</SelectItem>
                      <SelectItem value="2">Second Year</SelectItem>
                      <SelectItem value="3">Third Year</SelectItem>
                      <SelectItem value="4">Fourth Year</SelectItem>
                      <SelectItem value="5">Fifth Year</SelectItem>
                      <SelectItem value="pg">Postgraduate</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Eligibility Criteria{" "}
              <span className="text-sm text-red-500">(all required)</span>
            </h2>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="isStudent"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <div className="flex flex-row items-start space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I am a student</FormLabel>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isAfrican"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <div className="flex flex-row items-start space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I am of African descent</FormLabel>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hasActiveSocialMedia"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <div className="flex flex-row items-start space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I have at least one active social media account
                        </FormLabel>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="agreeToShare"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <div className="flex flex-row items-start space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to share the flyer on my social media account
                        </FormLabel>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="agreeToSubmitLink"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <div className="flex flex-row items-start space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I will submit the link to my social media account for
                          verification
                        </FormLabel>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="agreeToRules"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <div className="flex flex-row items-start space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I confirm that I am eligible and agree to the
                          competition rules which are found{" "}
                          <Link
                            href="https://www.instagram.com/edukateafrica/"
                            className="text-blue-500 underline"
                          >
                            here
                          </Link>
                        </FormLabel>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Social Media Link</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Please include the link to your most active social media account.
            </p>
            <FormField
              control={form.control}
              name="socialMediaLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Social Media Link{" "}
                    <span className="text-sm text-red-500">(required)</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="https://" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="hearAboutEduQuiz"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Where did you hear about the EduQuiz?{" "}
                    <span className="text-sm text-red-500">(required)</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="LinkedIn" id="r_linkedin" />
                          <Label htmlFor="r_linkedin">LinkedIn</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Facebook" id="r_facebook" />
                          <Label htmlFor="r_facebook">Facebook</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Instagram" id="r_instagram" />
                          <Label htmlFor="r_instagram">Instagram</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="X" id="r_x" />
                          <Label htmlFor="r_x">X (Twitter) </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Word of Mouth" id="mouth" />
                          <Label htmlFor="r_word-of-mouth">Word of Mouth</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Prize Information</h2>
            <p className="text-sm text-muted-foreground">
              The prize consists of a cash award for first winner and a
              certificate. £100 [one hundred pounds only] 2nd and 3rd place
              winners will receive a certificates of participation respectively.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Agreement & Submission</h2>
            <FormField
              control={form.control}
              name="digitalSignature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Digital signature</FormLabel>
                  <FormControl>
                    <Input placeholder="Type your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm text-muted-foreground">
              By signing above, I agree to the terms and conditions of the
              competition. I acknowledge that this constitutes a legal signature
              and confirm that I have read and understood the rules of the
              competition.
            </p>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#E38B29] text-foreground hover:bg-[#C77A23]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader className="mr-2" /> Submitting...
              </>
            ) : (
              "SUBMIT"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
