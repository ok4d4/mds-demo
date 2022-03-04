import { VFC } from 'react'
import firebase from '../firebaseConfig'
import { useRouter } from 'next/router'
import { useLogout } from '../hooks/useLogout'
import { Layout } from '../components/Layout'
import Link from 'next/link'
import { PlaceListMemo } from '../components/PlaceList'
// import { NewsListMemo } from '../components/NewsList'
// import { NewsEditMemo } from '../components/NewsEdit'
// import { TaskListMemo } from '../components/TaskList'
// import { TaskEditMemo } from '../components/TaskEdit'

const List: VFC = () => {
  const router = useRouter()
  //   const { logout } = useLogout()
  // 現在ログインしているユーザーを取得
  const user = firebase.auth().currentUser
  //   if (!user) return <div>ログインしていません</div>

  return (
    <Layout title="地域リスト">
      <div className="h-screen flex p-5">
        <div className="w-4/5">
          <div className="text-7xl font-bold text-black text-center mt-10 mb-8">
            ご希望の地域をお選びください
          </div>
          <PlaceListMemo />
        </div>
        <div className="w-1/5">
          <div className="h-full flex flex-col justify-end">
            <div
              className="text-center w-full mb-2 text-2xl bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
              onClick={() => router.push('/')}
            >
              前画面に戻る
            </div>
            <div className="text-center w-full mb-2 text-2xl bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
              終了する
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default List
