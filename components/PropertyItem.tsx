import { Property } from '../types/types'
import { VFC, memo } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface Props {
  property: Property
}
const PropertyItem: VFC<Props> = ({ property }) => {
  const router = useRouter()
  return (
    <>
      <div className="h-full px-4 py-4 rounded overflow-hidden shadow-lg">
        <div className="h-20">
          <div className="grid grid-cols-2 grid-rows-1 text-base">
            <h2 className="text-2xl title-font font-extrabold text-gray-900 mb-2 h-7 leading-7">
              {property.type}
            </h2>
            <div className="text-lg font-medium text-gray-900 h-7 leading-7 text-right">
              {property.station}
            </div>
          </div>
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <h2 className="text-lg text-gray-900 mt-2 mb-2 ">
              {property.address}
            </h2>
            <div className="text-lg font-medium text-gray-900 mt-2 mb-2 text-right">
              {property.distance}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-4 h-[calc(100%-5rem)]">
          <h2 className="font-medium text-gray-900">
            <div className="rounded-lg overflow-hidden">
              <Image
                className="h-full w-full"
                width={500}
                height={500}
                layout="responsive"
                src="https://dummyimage.com/500x500"
              />
            </div>
          </h2>
          <div className="flex flex-col  justify-between text-base text-gray-900 h-auto">
            <p className="text-right">
              <span className="text-5xl font-bold text-gray-900">
                {property.price}
              </span>
              <span className="text-lg font-bold text-gray-900 ml-1">万円</span>
            </p>
            <div className="flex items-center justify-between ">
              <div>土地面積</div>
              <div>
                {property.land_area}
                <span className="ml-1">
                  m<span className="align-super text-xs">2</span>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>建物面積</div>
              <div>
                {property.building_area}
                <span className="ml-1">
                  m<span className="align-super text-xs">2</span>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>間取り</div>
              <div>{property.layout}</div>
            </div>
            <div className="flex items-center justify-between">
              <div>築年月</div>
              <div>{property.age}</div>
            </div>
            <div
              className="text-center w-full text-2xl bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mt-2"
              onClick={(e) => router.push(`detail?id=${property.id}`)}
            >
              詳細表示
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const PropertyItemMemo = memo(PropertyItem)
