import '../styles/globals.css'
import { AppProps } from 'next/app'
import { useUserChanged } from '../hooks/useUserChanged'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { store } from '../app/store'

function MyApp({ Component, pageProps }: AppProps) {
  // ログインしているユーザーが変化したときの副作用フック
  const {} = useUserChanged()

  //全体で使用するReactQueryのクライアントをstateで管理する
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false, //リトライしない。デフォルトは3回
            refetchOnWindowFocus: false, //ウィンドウをフォーカスしてもフェッチしない
          },
        },
      })
  )
  return (
    // ReactQueryのプロバイダー
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      {/* ReactQuery開発者ツール */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
