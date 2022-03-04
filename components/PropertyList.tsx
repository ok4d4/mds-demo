import { VFC, memo } from 'react'
import { useQueryProperties } from '../hooks/useQueryProperties'
import { PropertyItemMemo } from './PropertyItem'

const PropertyList: VFC = () => {
  const { status, data } = useQueryProperties()
  if (status === 'loading') return <div>{'Loading...'}</div>
  if (status === 'error') return <div>{'Error'}</div>

  return (
    <div className="h-screen px-5 py-5 inline-grid grid-cols-2 grid-rows-3 gap-4">
      {data.map((property) => {
        return <PropertyItemMemo key={property.id} property={property} />
      })}
      {/* <div className="">
        <PropertyItemMemo key={data[0].id} property={data[0]} />
      </div>
      <div className="bg-orange-200">2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div> */}
      {/* 
      <ul>
        {data?.map((property) => (
          <PropertyItemMemo key={property.id} property={property} />
        ))}
      </ul>
    </div>
  ) */}
    </div>
  )
}

export const PropertyListMemo = memo(PropertyList)
