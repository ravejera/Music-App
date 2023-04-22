import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Banner from "@/components/banner/Banner";

const GET_ALBUM = gql`
  query Query($id: ID!) {
    album(id: $id) {
      id
      name
      images {
        url
      }
      tracks {
        items {
          type
          name
          duration_ms
          id
        }
      }
      total_tracks
      album_type
    }
  }
`;

const Album = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data, error } = useQuery(GET_ALBUM, { variables: { id } });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const tracks = data.album.tracks.items;

  const duration = (time = 0) => {
    // 1000ms - 1s
    // 60s - 1m
    const min = Math.floor(time / 60000);
    let sec = (Math.floor(time / 1000) % 60)
    sec = sec < 10 ?`0${sec}` : sec

    return `${min}:${sec}`
  }

  return (
    <>
      <Head>
        <title>{data?.album?.name}</title>
        <meta name="description" content="List albums" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main__menu">
        <Banner album={data.album} />
        <div className="album">
          <div className="album__title">Tracks</div>
          <div className="album__body">
            {tracks &&
              tracks.map((track) => {
                return (
                  <div className="album_single_song" key={track.id}>
                    <div className="song__name">
                      <p>{track.name}</p>
                    </div>
                    <div className="song__type">
                      <p>{track.type}</p>
                    </div>

                    <div className="duration">
                      <p>{duration(track.duration_ms)}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
