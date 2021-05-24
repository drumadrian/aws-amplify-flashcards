/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getServiceMetadata = /* GraphQL */ `
  query GetServiceMetadata($id: ID!, $sk: String!) {
    getServiceMetadata(id: $id, sk: $sk) {
      id
      sk
      service
      description
      image
      regionsList
      createdAt
      updatedAt
    }
  }
`;
export const listServiceMetadatas = /* GraphQL */ `
  query ListServiceMetadatas(
    $id: ID
    $sk: ModelStringKeyConditionInput
    $filter: ModelServiceMetadataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listServiceMetadatas(
      id: $id
      sk: $sk
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        sk
        service
        description
        image
        regionsList
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
