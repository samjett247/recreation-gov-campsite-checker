/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlert = /* GraphQL */ `
  mutation CreateAlert(
    $input: CreateAlertInput!
    $condition: ModelAlertConditionInput
  ) {
    createAlert(input: $input, condition: $condition) {
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
export const updateAlert = /* GraphQL */ `
  mutation UpdateAlert(
    $input: UpdateAlertInput!
    $condition: ModelAlertConditionInput
  ) {
    updateAlert(input: $input, condition: $condition) {
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
export const deleteAlert = /* GraphQL */ `
  mutation DeleteAlert(
    $input: DeleteAlertInput!
    $condition: ModelAlertConditionInput
  ) {
    deleteAlert(input: $input, condition: $condition) {
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
