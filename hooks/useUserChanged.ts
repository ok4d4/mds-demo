import firebase from '../firebaseConfig'
import Cookie from 'universal-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export let unSubMeta: () => void

export const useUserChanged = () => {
  const cookie = new Cookie()
  const router = useRouter()
  const HASURA_TOKEN_KEY = 'https://hasura.io/jwt/claims'

  useEffect(() => {
    const unSubUser = firebase.auth().onAuthStateChanged(async (user) => {
      // user: 変更後のユーザー
      if (user) {
        //cookieに格納されているtokenと同じ
        const token = await user.getIdToken(true)
        //claims、expired time、user_idなどが含まれるオブジェクト
        const idTokenResult = await user.getIdTokenResult()
        //カスタムclaimsが適切にセットされているか？
        const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY]

        //カスタムclaimsがセットされているか判定。functions/src/index.ts参照
        if (hasuraClaims) {
          //カスタムclaimsがセットされている
          console.log('カスタムclaimsがセットされている')
          cookie.set('token', token, { path: '/' })
          // router.push('/list')
        } else {
          // まだカスタムclaimsがセットされていない場合は、user_metaに情報が追加されるのを待つ
          console.log('カスタムclaimsがセットされていない')
          // user_metaにスナップショット監視を貼る
          const userRef = firebase
            .firestore()
            .collection('user_meta')
            .doc(user.uid)
          unSubMeta = userRef.onSnapshot(async () => {
            // 最初に一度実行される。その後、user_metaに変更があれば実行される。
            // その後の処理は冒頭と同じ
            const tokenSnap = await user.getIdToken(true)
            const idTokenResultSnap = await user.getIdTokenResult()
            const hasuraClaimsSnap = idTokenResultSnap.claims[HASURA_TOKEN_KEY]
            if (hasuraClaimsSnap) {
              console.log('clamisが追加されたのをuser_metaから検知した')
              cookie.set('token', tokenSnap, { path: '/' })
              // router.push('/list')
            } else {
              console.log('user_metaを見たが、まだclaimsが追加されていない')
            }
          })
        }
      }
    })

    return () => {
      unSubUser()
    }
  }, [])
  return {}
}
