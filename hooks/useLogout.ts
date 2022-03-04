import Cookie from 'universal-cookie'
import firebase from '../firebaseConfig'
import { unSubMeta } from './useUserChanged'
import { useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'
// import { resetEditedNews, resetEditedTask } from '../slices/uiSlice'

const cookie = new Cookie()

//ログアウトボタンが押されたときに呼ばされる処理
export const useLogout = () => {
  //   const dispatch = useDispatch()
  //   const queryClient = useQueryClient()
  const logout = async () => {
    //user_metaのスナップショット監視を停止
    if (unSubMeta) {
      unSubMeta()
    }
    // dispatch(resetEditedNews)
    // dispatch(resetEditedTask)
    // firebaseからログアウト
    await firebase.auth().signOut()
    // queryClient.removeQueries('tasks')
    // queryClient.removeQueries('news')

    // CookieのJWTトークンを削除
    cookie.remove('token')
  }

  // コンポーネントから利用できるようにする
  return { logout }
}
