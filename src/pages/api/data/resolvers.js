import { Client } from "@elastic/elasticsearch";

const client = new Client({
  node: "https://localhost:9200",
  tls: {
    // might be required if it's a self-signed certificate
    rejectUnauthorized: false,
  },
  auth: {
    username: "elastic",
    password: "hrC5kEdzZ*Ej3v+GeZ0B",
  },
});

const resolvers = {
    Query: {
      search: async (_, args) => {
        const { q } = args

        try {
          const response = await client.search({
            index: "search_music",
            query: {
              query_string: {
                query: `*${q}*`,
              },
            }
          });
  
          return response.hits.hits.map((hit) => ({
            ...hit._source,
            id: hit._id,
          }));
        } catch (error) {
          console.log(error.message);
          return [];
        }
      },
      albums: async () => {
        try {
          const response = await client.search({
            index: "search_music",
            body: {
              query: {
                match_all: {},
              },
            },
          });
  
          return response.hits.hits.map((hit) => ({
            ...hit._source,
            id: hit._id,
          }));
        } catch (error) {
          console.log(error.message);
          return [];
        }
      },
      album: async (_, args) => {
        const { id } = args
        
        try {
          const response = await client.get({
            index: "search_music",
            id
          });

          return response._source
        } catch (error) {
          console.log(error.message);
          return {};
        }
      },
    },
  };
  

  export default resolvers