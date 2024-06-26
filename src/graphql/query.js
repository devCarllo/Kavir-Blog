import { gql } from "@apollo/client";

const GET_BLOG_INFO = gql`
  query MyQuery {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      id
      title
      slug
      createdAt
      cover {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      avatar {
        url
      }
      id
      name
      slug
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      description {
        html
      }
      field
      name
      posts {
        cover {
          url
        }
        id
        title
        slug
      }
    }
  }
`;

const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        field
        name
      }
      content {
        html
      }
      cover {
        url
      }
      createdAt
      id
      title
    }
  }
`;

const GET_POST_COMMENTS = gql`
  query getComment($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      email
      id
      name
      text
      createdAt
    }
  }
`;

export {
  GET_BLOG_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_INFO,
  GET_POST_INFO,
  GET_POST_COMMENTS,
};
