import Cookies from 'universal-cookie'
import { GraphQLClient } from 'graphql-request'
import { Property } from '../types/types'
import { GET_PROPERTIES } from '../queries/queries'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { selectSearchParams } from '../slices/slice'

const cookie = new Cookies()
const endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT
let graphQLClient: GraphQLClient

interface PropertiesRes {
  properties: Property[]
}

const fetchProperties = async ({ queryKey }) => {
  const [_key, searchParams] = queryKey

  const { properties: data } = await graphQLClient.request<PropertiesRes>(
    GET_PROPERTIES,
    {
      ...searchParams,
      place: `%${searchParams.place}%`,
    }
  )

  return data
}

export const useQueryProperties = () => {
  const searchParams = useSelector(selectSearchParams)
  // JWTをクッキーに含めたGraphQLクライアントの作成
  useEffect(() => {
    graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${cookie.get('token')}`,
      },
    })
  }, [cookie.get('token')])
  // ユーザーが切り替わるたびにGraphQLクライアントを再生成するためにCookieを監視

  //ReactQueryでHasuraから物件情報を取得し、キャッシュに格納する。キャッシュキーはproperties
  return useQuery<Property[], Error>({
    queryKey: ['properties', searchParams],
    queryFn: fetchProperties,
    staleTime: 0,
  })
}
