import { useState, type FormEvent } from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Textarea } from '@/components/Textarea'
import { submitDemoRequest, type DemoFormData } from '@/features/contact/api/submitContact'

export function DemoRequestForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const data: DemoFormData = {
      name: form.get('demo-name') as string,
      email: form.get('demo-email') as string,
      company: form.get('demo-company') as string,
      message: form.get('demo-message') as string,
    }
    await submitDemoRequest(data)
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-lg font-medium text-green-800">Request received!</p>
        <p className="mt-2 text-green-700">We&apos;ll schedule your demo shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <Input
        id="demo-name"
        name="demo-name"
        label="Name"
        type="text"
        required
        placeholder="Your name"
        aria-required="true"
      />
      <Input
        id="demo-email"
        name="demo-email"
        label="Email"
        type="email"
        required
        placeholder="you@example.com"
        aria-required="true"
      />
      <Input
        id="demo-company"
        name="demo-company"
        label="Company"
        type="text"
        required
        placeholder="Your company"
        aria-required="true"
      />
      <Textarea
        id="demo-message"
        name="demo-message"
        label="What are you interested in?"
        required
        placeholder="Tell us about your project..."
        aria-required="true"
      />
      <Button type="submit" variant="secondary" disabled={loading}>
        {loading ? 'Sending...' : 'Request Demo'}
      </Button>
    </form>
  )
}
