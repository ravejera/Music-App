import { gql } from "graphql-tag";

const typeDefs = gql`
  type Album {
    album_group: String
    album_type: String
    artists: [Artist]
    copyrights: [Copyright]
    genres: [String]
    id: ID!
    images: [Image]
    label: String
    name: String
    release_date: String
    total_tracks: Int
    tracks: TrackConnection
    type: String
    uri: String
  }

  type Artist {
    id: ID!
    name: String
    type: String
  }

  type Copyright {
    text: String
    type: String
  }

  type Image {
    url: String
  }

  type Track {
    artists: [Artist]
    duration_ms: Int
    id: ID!
    name: String
    track_number: Int
    type: String
    uri: String
  }

  type TrackConnection {
    items: [Track]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type Query {
    albums: [Album]
    search(q: String!): [Album]
    album(id: ID!): Album
  }
`;

export default typeDefs