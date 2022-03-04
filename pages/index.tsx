import { Layout } from '../components/Layout'
import { Auth } from '../components/Auth'
import firebase from '../firebaseConfig'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchParams, setSearchParams } from '../slices/slice'

export default function Home() {
  const user = firebase.auth().currentUser
  const dispatch = useDispatch()
  const searchParams = useSelector(selectSearchParams)
  const router = useRouter()

  return (
    <Layout title="Home">
      {/* <p className="my-3">{user?.email}</p> */}
      <div className="h-full flex p-5">
        <div className="h-full w-4/5">
          <Auth /> {/* ログインフォームコンポーネント */}
        </div>
        <div className="w-1/5">
          <div className="h-full flex flex-1 flex-col justify-end">
            <div className="text-center text-2xl text-black font-bold text-xl mb-2">
              画面にタッチしてください
            </div>
            <div
              className="text-center w-full text-2xl bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mt-2"
              onClick={() => {
                dispatch(setSearchParams({ ...searchParams, type: '一戸建て' }))
                router.push('/place')
              }}
            >
              一戸建て
            </div>
            <div className="text-center w-full text-2xl bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-4 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded mt-2">
              マンション
            </div>
            <div className="text-center w-full text-2xl bg-purple-500 hover:bg-purple-400 text-white font-bold py-4 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded mt-2">
              土地
            </div>
            <div className="text-center w-full text-2xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-2">
              注文住宅
            </div>
            <div className="text-center w-full text-2xl bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded mt-2">
              店舗案内
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
