export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface DemoFormData {
  name: string
  email: string
  company: string
  message: string
}

export async function submitContact(data: ContactFormData): Promise<void> {
  await new Promise((r) => setTimeout(r, 1000))
  console.log('Contact submission:', data)
}

export async function submitDemoRequest(data: DemoFormData): Promise<void> {
  await new Promise((r) => setTimeout(r, 1000))
  console.log('Demo request:', data)
}
