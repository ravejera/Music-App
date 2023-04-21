import { createYoga, createSchema } from 'graphql-yoga'
const axios = require("axios");

const typeDefs = /* GraphQL */ `
  type Album {
    album_group: String
    album_type: String
    artists: [Artist]
    copyrights: [Copyright]
    external_ids: ExternalIDs
    external_urls: ExternalURLs
    genres: [String]
    id: ID!
    images: [Image]
    is_playable: Boolean
    label: String
    name: String
    popularity: Int
    release_date: String
    release_date_precision: String
    total_tracks: Int
    tracks: TrackConnection
    type: String
    uri: String
  }

  type Artist {
    external_urls: ExternalURLs
    id: ID!
    name: String
    type: String
    uri: String
  }

  type Copyright {
    text: String
    type: String
  }

  type ExternalIDs {
    upc: String
  }

  type ExternalURLs {
    spotify: String
  }

  type Image {
    height: Int
    url: String
    width: Int
  }

  type Track {
    artists: [Artist]
    disc_number: Int
    duration_ms: Int
    explicit: Boolean
    external_urls: ExternalURLs
    id: ID!
    is_local: Boolean
    is_playable: Boolean
    name: String
    preview_url: String
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
  }

`

const resolvers = {
  Query: {
    async albums() {
      try {
        const options = {
          method: 'GET',
          url: 'https://spotify23.p.rapidapi.com/albums/',
          params: {ids: '3IBcauSj5M2A6lTeffJzdv'},
          headers: {
            'X-RapidAPI-Key': '6ded3842f4msh461a0094f7d39b9p1198afjsn131812086c8f',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
          }
        };

        const response = axios.request(options)
        console.log(response.data);
        return response.data
        
      } catch (error) {
        console.error(error);
        return [{}]
      }
    },
  },
}

const schema = createSchema({
  typeDefs,
  resolvers,
})

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
}

export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql',
})