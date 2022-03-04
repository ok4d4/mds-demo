import { Place } from '../types/types'
import { VFC, memo, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchParams, setSearchParams } from '../slices/slice'

interface Props {
  place: Place
}
const PlaceItem: VFC<Props> = ({ place }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const searchParams = useSelector(selectSearchParams)

  return (
    <div
      className="text-center m-2 text-5xl bg-green-600 hover:bg-green-500 text-white font-bold py-24 px-4 border-b-4 border-green-900 hover:border-green-600 rounded"
      onClick={() => {
        dispatch(setSearchParams({ ...searchParams, place: place.name }))
        router.push('/list')
      }}
    >
      {place.name}
    </div>
  )
}

export const PlaceItemMemo = memo(PlaceItem)
