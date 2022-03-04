import { VFC, memo } from 'react'
import { useQueryPropertyById } from '../hooks/useQueryPropertyById'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setSearchParams } from '../slices/slice'

interface Props {
  id: string | string[]
}
const PropertyDetail: VFC<Props> = (id) => {
  const { status, data: property } = useQueryPropertyById(id)
  if (status === 'loading') return <div>{'Loading...'}</div>
  if (status === 'error') return <div>{'Error'}</div>

  const p = property[0]

  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <div className="h-screen">
      <div className="w-screen p-10 bg-teal-500">
        <div className="text-white text-4xl font-bold">{p.type}</div>
      </div>
      <div className="flex px-5 py-5">
        <div className="w-1/2 flex flex-col justify-between">
          <div className="rounded-lg overflow-hidden p-2">
            <Image
              className="h-full w-full"
              width={700}
              height={700}
              layout="responsive"
              src="https://dummyimage.com/700x700"
            />
          </div>
          <div className="rounded-lg overflow-hidden p-2">
            <Image
              className="h-full w-full"
              width={700}
              height={200}
              layout="responsive"
              src="https://dummyimage.com/700x200"
            />
          </div>
        </div>
        <div className="w-1/2 flex">
          <div className="w-3/5 p-2 text-lg flex flex-col gap-1">
            <div className="flex items-end justify-between align-baseline">
              <div>価格</div>
              <div className="text-right flex items-end">
                <div className="text-5xl text-red-600 font-bold text-gray-900">
                  {p.price}
                </div>
                <span className="text-lg font-bold text-gray-900 ml-1">
                  万円
                </span>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>間取り</div>
              <div className="text-right flex items-end">
                <div className="text-xl text-gray-900">{p.layout}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>建物面積</div>
              <div className="text-right flex">
                <div className="text-right flex items-end">
                  <div className="text-xl text-gray-900">{p.building_area}</div>
                </div>
                <span className="ml-1  text-gray-900">
                  m<span className="align-super text-xs  text-gray-900">2</span>
                </span>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>土地面積</div>
              <div className="text-right flex">
                <div className="text-right flex items-end">
                  <div className="text-xl text-gray-900">{p.land_area}</div>
                </div>
                <span className="ml-1  text-gray-900">
                  m<span className="align-super text-xs  text-gray-900">2</span>
                </span>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>種別</div>
              <div className="text-right flex items-end">
                <div className="text-xl text-gray-900">{p.type}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>所在地</div>
              <div className="text-right flex items-end">
                <div className="text-xl text-gray-900">{p.address}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>構造</div>
              <div className="text-right flex items-end">
                <div className="text-xl text-gray-900">{p.structure}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>築年月</div>
              <div className="text-right flex items-end">
                <div className="text-xl text-gray-900">{p.age}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>引渡日</div>
              <div className="text-right flex items-end">
                <div className="text-xl text-gray-900">{p.handover_date}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>現況</div>
              <div className="text-right flex items-end">
                <div className="text-xl text-gray-900">{p.state}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>地目・用途</div>
              <div className="text-right flex items-end">
                <div className="text-xl text-gray-900">{p.ground_usage}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>建ぺい率・容積率</div>
              <div className="text-right flex items-end">
                <div className="text-xl text-gray-900">{p.ratios}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>道路</div>
              <div className="text-right flex items-end">
                <div className="text-xl text-gray-900">{p.road}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>敷地権利</div>
              <div className="text-right flex items-end">
                <div className="text-xl text-gray-900">{p.right}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>備考</div>
              <div className="text-right flex items-end">
                <div className="text-xl text-gray-900">{p.remarks}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div>設備</div>
              <div className="text-right flex items-end">
                <div className="text-xl text-gray-900">{p.facility}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div className="text-base">No.</div>
              <div className="text-right flex items-end">
                <div className="text-base text-gray-900">{p.no}</div>
              </div>
            </div>
            <div className="flex items-end justify-between align-baseline">
              <div className="text-base">取引様態</div>
              <div className="text-right flex items-end">
                <div className="text-base text-gray-900">{p.mode}</div>
              </div>
            </div>
          </div>
          <div className="w-2/5 ml-4">
            <div className="h-full flex flex-col justify-end">
              <div className="text-center w-full mb-2 text-2xl bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                次の物件
              </div>
              <div
                onClick={() => {
                  router.push('/list')
                }}
                className="text-center w-full mb-2 text-2xl bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
              >
                一覧画面に戻る
              </div>
              <div
                onClick={() => {
                  dispatch(setSearchParams({ place: '', type: '' }))
                  router.push('/')
                }}
                className="text-center w-full mb-2 text-2xl bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
              >
                終了する
              </div>
              <div className=" text-center w-full text-xl bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                <div className="text-yellow-400">この物件を携帯に読み込む</div>

                <div className="text-sm mb-2">
                  下のQLコードを読み取ってください
                </div>
                <Image
                  className="h-full w-full"
                  width={200}
                  height={200}
                  layout="responsive"
                  src="https://dummyimage.com/200x200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const PropertyDetailMemo = memo(PropertyDetail)
