import { gql } from "@apollo/client";

const POST_COMMENT = gql`
  mutation postComment(
    $name: String!
    $email: String!
    $text: String!
    $createdAt: DateTime
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        createdAt: $createdAt
        post: { connect: { slug: $slug } }
      }
    ) {
      id
      createdAt
    }
  }
`;

export { POST_COMMENT };
