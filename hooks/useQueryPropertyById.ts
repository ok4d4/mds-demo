import Cookies from 'universal-cookie'
import { GraphQLClient } from 'graphql-request'
import { Property } from '../types/types'
import { GET_PROPERTY_BY_ID } from '../queries/queries'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

const cookie = new Cookies()
const endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT
let graphQLClient: GraphQLClient

interface PropertiesRes {
  properties: Property[]
}

const fetchPropertyById = async ({ queryKey }) => {
  const [_key, id] = queryKey

  console.log(id)
  const { properties: data } = await graphQLClient.request<PropertiesRes>(
    GET_PROPERTY_BY_ID,
    { id }
  )
  console.log(data)
  return data
}

export const useQueryPropertyById = ({ id }) => {
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
    queryKey: ['properties', id],
    queryFn: fetchPropertyById,
    staleTime: 0,
  })
}
