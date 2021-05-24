/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createServiceMetadata = /* GraphQL */ `
  mutation CreateServiceMetadata(
    $input: CreateServiceMetadataInput!
    $condition: ModelServiceMetadataConditionInput
  ) {
    createServiceMetadata(input: $input, condition: $condition) {
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
export const updateServiceMetadata = /* GraphQL */ `
  mutation UpdateServiceMetadata(
    $input: UpdateServiceMetadataInput!
    $condition: ModelServiceMetadataConditionInput
  ) {
    updateServiceMetadata(input: $input, condition: $condition) {
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
export const deleteServiceMetadata = /* GraphQL */ `
  mutation DeleteServiceMetadata(
    $input: DeleteServiceMetadataInput!
    $condition: ModelServiceMetadataConditionInput
  ) {
    deleteServiceMetadata(input: $input, condition: $condition) {
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
