export const schema = gql`
  type Contact {
    id: String!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]!
    contact(id: String!): Contact
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
  }

  input UpdateContactInput {
    name: String
    email: String
    message: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact!
    updateContact(id: String!, input: UpdateContactInput!): Contact!
    deleteContact(id: String!): Contact!
  }
`
