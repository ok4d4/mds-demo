import firebase from '../firebaseConfig'
import { useState, ChangeEvent, useCallback, FormEvent } from 'react'
// import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth'

export const useFirebaseAuth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // ログインするのか、ユーザー作成するのかのフラグ。trueならログインするモード
  const [isLogin, setIsLogin] = useState(true)

  const emailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  const pwChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }, [])

  const resetInput = useCallback(() => {
    setEmail('')
    setPassword('')
  }, [])

  // isLoginを参照しているので依存配列に入れる
  const toggleMode = useCallback(() => {
    setIsLogin(!isLogin)
  }, [isLogin])

  // トップページのフォームsubmitボタンが押されたときの処理
  const authUser = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (isLogin) {
        //ログインをする場合
        try {
          await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
          alert(error.message)
        }
        resetInput()
      } else {
        //ユーザー作成をする場合
        try {
          await firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (error) {
          alert(error.message)
        }
        resetInput()
      }
    },
    [email, password, isLogin]
  )
  return {
    email,
    password,
    emailChange,
    pwChange,
    resetInput,
    isLogin,
    toggleMode,
    authUser,
  }
}
