import { useState, type FormEvent } from 'react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import {
  submitContact,
  type ContactFormData,
} from '@/features/contact/api/submitContact';
import { easeOut, motion } from 'motion/react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: form.get('name') as string,
      email: form.get('email') as string,
      message: form.get('message') as string,
    };
    await submitContact(data);
    setLoading(false);
    setSubmitted(true);
  }

  const contactVariants ={
    hidden:{opacity:0, y:20},
    visible:{opacity:1,y:0, transition:{duration:.3,ease:"easeOut" }}
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-lg font-medium text-green-800">Thank you!</p>
        <p className="mt-2 text-green-700">We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <motion.form onSubmit={handleSubmit} className="space-y-5" noValidate
    variants={{
      hidden:{},
      visible:{transition:{staggerChildren:.2}}
    }}
    >
      <motion.div
      variants={contactVariants}
      >
        <Input
          id="contact-name"
          name="name"
          label="Name"
          type="text"
          required
          placeholder="Your name"
          aria-required="true"
        />
      </motion.div>
      <motion.div
      variants={contactVariants}>
        <Input
          id="contact-email"
          name="email"
          label="Email"
          type="email"
          required
          placeholder="you@example.com"
          aria-required="true"
        />
      </motion.div>
      <motion.div
      variants={contactVariants}>
        <Textarea
          id="contact-message"
          name="message"
          label="Message"
          required
          placeholder="How can we help you?"
          aria-required="true"
        />
      </motion.div>
      <motion.div 
      variants={contactVariants}>
        <Button
          className="w-full"
          type="submit"
          variant="secondary"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </motion.div>
    </motion.form>
  );
}
