import { gql } from "@apollo/client";

const GET_ALL_SLUGS = gql`
query {
    realisations {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
query {
  realisations {
    data {
      attributes {
        entreprise
        date
        competences
        technologies
        slug
        illustration {
          data {
            attributes {
              url
            }
          }
        }
        travaux {
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
  
`;


const GET_INDIVIDUAL_POST = gql`
query ($slug: String!) {
    realisations(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          entreprise
          date
          travaux {
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_POSTS, GET_ALL_SLUGS, GET_INDIVIDUAL_POST };