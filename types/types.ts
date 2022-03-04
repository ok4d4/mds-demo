export interface Property {
  id: string
  name: string
  created_at: string
  user_id: string
  address: string
  station: string
  distance: string
  price: number
  building_area: number
  land_area: number
  layout: string
  type: string
  age: string
  structure: string
  handover_date: string
  state: string
  ratios: string
  right: string
  remarks: string
  no: number
  mode: string
  ground_usage: string
  road: string
  facility: string
}

export interface Place {
  id: string
  name: string
  created_at: string
  user_id: string
}

export interface EditSearchParams {
  type: string
  place: string
}
