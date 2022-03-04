import { VFC, memo } from 'react'
import { useQueryPlaces } from '../hooks/useQueryPlaces'
import { PlaceItemMemo } from './PlaceItem'

const PlaceList: VFC = () => {
  const { status, data } = useQueryPlaces()
  if (status === 'loading') return <div>{'Loading...'}</div>
  if (status === 'error') return <div>{'Error'}</div>

  return (
    <div className="grid grid-cols-2">
      {data?.map((place) => (
        <PlaceItemMemo key={place.id} place={place} />
      ))}
    </div>
  )
}

export const PlaceListMemo = memo(PlaceList)
