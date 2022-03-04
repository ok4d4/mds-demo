import Cookies from 'universal-cookie'
import { GraphQLClient } from 'graphql-request'
import { Place } from '../types/types'
import { GET_PLACES } from '../queries/queries'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { selectSearchParams } from '../slices/slice'

const cookie = new Cookies()
const endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT
let graphQLClient: GraphQLClient

interface PlacesRes {
  places: Place[]
}

const fetchPlaces = async () => {
  const { places: data } = await graphQLClient.request<PlacesRes>(GET_PLACES)
  return data
}

export const useQueryPlaces = () => {
  // JWTをクッキーに含めたGraphQLクライアントの作成
  useEffect(() => {
    graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${cookie.get('token')}`,
      },
    })
  }, [cookie.get('token')])
  // ユーザーが切り替わるたびにGraphQLクライアントを再生成するためにCookieを監視

  //ReactQueryでHasuraから物件情報を取得し、キャッシュに格納する。キャッシュキーはplaces
  return useQuery<Place[], Error>({
    queryKey: 'places',
    queryFn: fetchPlaces,
    staleTime: 0,
  })
}
