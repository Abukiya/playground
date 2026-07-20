import { Provider } from '@/app/provider'
import { AppRouter } from '@/app/router'

export function App() {
  return (
    <Provider>
      <AppRouter />
    </Provider>
  )
}
