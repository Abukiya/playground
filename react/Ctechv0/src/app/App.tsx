import { ErrorBoundary } from '@/app/ErrorBoundary'
import { Provider } from '@/app/provider'
import { AppRouter } from '@/app/router'

export function App() {
  return (
    <Provider>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </Provider>
  )
}
