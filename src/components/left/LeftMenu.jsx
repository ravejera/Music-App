import React, { useEffect, useState } from "react";
import { FaSupple, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import Menu from "../menu/Menu";
import { MenuList } from "../menuList/MenuList";
import TrackList from "../tracklist/TrackList";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";

const GET_ITEMS = gql`
  query Query($q: String!) {
    search(q: $q) {
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

const LeftMenu = () => {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);

  const { loading, data, error } = useQuery(GET_ITEMS, {
    variables: { q: query },
  });

  useEffect(() => {
    if (data?.search?.length && !!query) {
      setShowList(true);
    }
  }, [data, loading]);

  const router = useRouter();

  return (
    <div className="left__menu">
      <div>
        <div className="logo__container">
          <i>
            <FaSupple className="music__logo" />{" "}
          </i>
          <h2>music</h2>
          <i>
            <FaEllipsisH className="dot__logo" />{" "}
          </i>
        </div>
        <div className="search__box">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onBlur={(e) => {
              console.log({ TARGET: e.target });
              setTimeout(() => {
                setQuery("");
                setShowList(false);
              }, 200);
            }}
          />
          <i>
            {" "}
            <BiSearchAlt className="search__icon" />{" "}
          </i>
        </div>
        <div
          className="search__list"
          style={{
            display: showList > 0 ? "initial" : "none",
          }}
        >
          {data?.search &&
            data.search.map((item) => (
              <div
                className="each_search_list"
                key={item.id}
                onClick={() => {
                  router.push(`/album/${item.id}`).then(() => {
                    setQuery("");
                    setShowList(false);
                  });
                }}
              >
                <Link href={`/album/${item.id}`}>{item.name}</Link>
              </div>
            ))}
        </div>

        <Menu title={"Menu"} menuObject={MenuList} />
      </div>
      <TrackList />
    </div>
  );
};

export default LeftMenu;
