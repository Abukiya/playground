import { Component, type ReactNode } from 'react'
import { Heading } from '@/components/Heading'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <Heading>Something went wrong</Heading>
          <p className="mt-4 text-lg text-gray-600">
            A critical error occurred. Please refresh the page.
          </p>
          <Button className="mt-8" onClick={() => window.location.reload()}>
            Refresh Page
          </Button>
        </Container>
      )
    }

    return this.props.children
  }
}
