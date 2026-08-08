import { Provider } from '@/app/provider'
import { AppRouter } from '@/app/router'
import { ErrorBoundary } from '@/app/ErrorBoundary'

export function App() {
  return (
    <Provider>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </Provider>
  )
}
