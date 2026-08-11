import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'

export function ErrorPage() {
  const error = useRouteError()

  let title = 'Something went wrong'
  let message = 'An unexpected error occurred. Please try again.'

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? 'Page not found' : 'Error'
    message = error.statusText || message
  } else if (error instanceof Error) {
    message = error.message
  }

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <Heading>{title}</Heading>
      <p className="mt-4 text-lg text-gray-600">{message}</p>
      <Button asChild className="mt-8">
        <Link to="/">Go Home</Link>
      </Button>
    </Container>
  )
}
