import { ReactNode, VFC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  children: ReactNode
  title: string
}

export const Layout: VFC<Props> = ({ children, title = 'MDS Demo' }) => {
  return (
    <div className="flex flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main className="h-screen w-screen font-body justify-center items-center">
        {children}
      </main>
    </div>
  )
}
