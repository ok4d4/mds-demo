import { VFC, useEffect } from 'react'
import firebase from '../firebaseConfig'
import { useRouter } from 'next/router'
import { useLogout } from '../hooks/useLogout'
import { Layout } from '../components/Layout'
import Link from 'next/link'
import { PropertyDetailMemo } from '../components/PropertyDetail'
// import { NewsListMemo } from '../components/NewsList'
// import { NewsEditMemo } from '../components/NewsEdit'
// import { TaskListMemo } from '../components/TaskList'
// import { TaskEditMemo } from '../components/TaskEdit'

const Detail: VFC = () => {
  const { logout } = useLogout()
  // 現在ログインしているユーザーを取得
  const user = firebase.auth().currentUser
  // if (!user) return <div>ログインしていません</div>
  const router = useRouter()
  const id = router.query.id

  return (
    <Layout title="物件詳細">
      <PropertyDetailMemo id={id} />
    </Layout>
  )
}

export default Detail
