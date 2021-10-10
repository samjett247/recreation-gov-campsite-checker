/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlert = /* GraphQL */ `
  query GetAlert($id: ID!) {
    getAlert(id: $id) {
      id
      name
      description
      searchdates
      creator
      email_recipients
      campsites {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAlerts = /* GraphQL */ `
  query ListAlerts(
    $id: ID
    $filter: ModelAlertFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAlerts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        description
        searchdates
        creator
        email_recipients
        campsites {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const campsite = /* GraphQL */ `
  query Campsite($id: Int!) {
    campsite(id: $id) {
      id
      name
      description
      alerts {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      campground {
        id
        name
        campsites {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const campground = /* GraphQL */ `
  query Campground($id: Int!) {
    campground(id: $id) {
      id
      name
      campsites {
        items {
          id
          name
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const lookupvalue = /* GraphQL */ `
  query Lookupvalue($id: ID!) {
    lookupvalue(id: $id) {
      id
      name
      value
      createdAt
      updatedAt
    }
  }
`;
