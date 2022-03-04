import { gql } from 'graphql-request'

export const GET_PROPERTIES = gql`
  query GetProperties($place: String!, $type: String!) {
    properties(where: { address: { _like: $place }, type: { _eq: $type } }) {
      id
      name
      address
      user_id
      type
      station
      price
      layout
      land_area
      distance
      created_at
      building_area
      age
    }
  }
`

export const GET_PROPERTY_BY_ID = gql`
  query GetPropertyById($id: uuid!) {
    properties(where: { id: { _eq: $id } }) {
      id
      land_area
      address
      age
      building_area
      created_at
      distance
      layout
      name
      price
      station
      type
      user_id
      mode
      no
      ratios
      remarks
      right
      road
      state
      structure
      handover_date
      ground_usage
      facility
    }
  }
`

export const GET_PLACES = gql`
  query GetPlaces {
    places {
      id
      name
      created_at
      user_id
    }
  }
`
