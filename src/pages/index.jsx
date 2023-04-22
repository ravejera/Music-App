import Head from 'next/head'
import Main from '@/components/main/Main'
import { gql, useQuery } from '@apollo/client';

const GET_ITEMS = gql`
  query Query{
    albums {
        id
        name
        images {
            url
        }
        total_tracks
        album_type
      }
  }
`;


export default function Home() {

  const { loading, data, error } = useQuery(GET_ITEMS);

  if (loading) return <div>Loading...</div>;
  if(error) return <div>Error: {error.message}</div>

  return (
    <>
      <Head>
        <title>Albums</title>
        <meta name="description" content="List albums" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main  albums={data?.albums}/>
    </>
  )
}
