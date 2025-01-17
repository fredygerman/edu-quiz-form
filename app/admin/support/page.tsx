import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SupportForm } from "@/components/support/support-form"

const FAQS = [
  {
    question: "How can I get help?",
    answer:
      "You can reach us through the contact form below, email, or phone during business hours.",
  },
  {
    question: "What are your support hours?",
    answer: "We're available Monday through Friday, 9AM to 5PM EST.",
  },
  {
    question: "What's the typical response time?",
    answer:
      "We aim to respond to all inquiries within 24 hours during business days.",
  },
]

export default function SupportPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="mb-6 text-5xl font-bold">How Can We Help?</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          We&lsquo;re here to help and answer any question you might have
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full max-w-3xl"
        >
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact Channels */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          Contact Channels
        </h2>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Contact channel cards remain the same */}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mb-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-3xl font-semibold">
            Contact Us
          </h2>
          <SupportForm />
        </div>
      </section>

      {/* Support Hours */}
      <section className="mx-auto max-w-2xl rounded-lg bg-gray-50 p-6 text-center">
        <h3 className="mb-4 text-xl font-semibold">Support Hours</h3>
        <p className="mb-2 text-gray-600">Monday - Friday, 9AM - 5PM EST</p>
        <p className="text-gray-600">
          Expected Response Time: Within 24 hours during business days
        </p>
      </section>
    </div>
  )
}
