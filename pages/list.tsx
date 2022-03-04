import { VFC } from 'react'
import firebase from '../firebaseConfig'
import { useRouter } from 'next/router'
import { useLogout } from '../hooks/useLogout'
import { Layout } from '../components/Layout'
import Link from 'next/link'
import { PropertyListMemo } from '../components/PropertyList'
import { useSelector } from 'react-redux'
import { selectSearchParams } from '../slices/slice'
// import { NewsListMemo } from '../components/NewsList'
// import { NewsEditMemo } from '../components/NewsEdit'
// import { TaskListMemo } from '../components/TaskList'
// import { TaskEditMemo } from '../components/TaskEdit'

const List: VFC = () => {
  const router = useRouter()
  const { logout } = useLogout()
  // 現在ログインしているユーザーを取得
  const user = firebase.auth().currentUser
  // if (!user) return <div>ログインしていません</div>
  const searchParams = useSelector(selectSearchParams)
  return (
    <Layout title="物件リスト">
      <div className="flex w-auto">
        <div className="w-4/5">
          <PropertyListMemo />
        </div>
        <div className="w-1/5 mr-4 mb-4">
          <div className="h-full flex flex-col justify-end">
            <div className="text-center text-4xl text-black font-bold text-xl mb-2">
              並び替え
            </div>
            <div className="text-center w-full mb-2 text-3xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              価格
            </div>
            <div className="text-center w-full mb-2 text-3xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              土地面積
            </div>
            <div className="text-center w-full mb-2 text-3xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              建物面積
            </div>
            <div className="text-center w-full mb-2 text-3xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              間取り
            </div>
            <div className="text-center w-full mb-2 text-3xl bg-pink-500 hover:bg-pink-400 text-white font-bold py-4 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded">
              元に戻す
            </div>
            <div className="text-center w-full mb-2 text-2xl bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mt-20">
              次のページ
            </div>
            <div
              className="text-center w-full mb-2 text-2xl bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
              onClick={() => router.push('/place')}
            >
              前画面に戻る
            </div>
            <div
              className="text-center w-full mb-2 text-2xl bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
              onClick={() => router.push('/')}
            >
              終了する
            </div>
          </div>
        </div>
      </div>
      {/* <p className="my-3">{user?.email}</p>
      <span
        className="text-blue-500 cursor-pointer"
        onClick={() => {
          logout()
          router.push('/')
        }}
      >
        ログアウトする
      </span>
      <p>{searchParams.type}</p>
      <p>{searchParams.place}</p> */}
      {/* <p className="mt-10 mb-5 text-blue-500 text-xl font-bold">News Edit</p>
      <div className="grid grid-cols-2 gap-40">
        <NewsListMemo />
        <NewsEditMemo />
      </div>

      <p className="mt-20 mb-4 text-blue-500 text-xl font-bold">Tasks Edit</p>
      <div className="grid grid-cols-2 gap-40">
        <TaskListMemo />
        <TaskEditMemo />
      </div> */}
      {/* <Link href="/place">
        <div className="mt-20 flex items-center cursor-pointer">
          <ChevronDoubleLeftIcon className="h-5 w-5 mx-1 text-blue-500" />
          <span>Back to main page</span>
        </div>
      </Link> */}
    </Layout>
  )
}

export default List
