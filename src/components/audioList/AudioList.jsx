import Link from "next/link";
import React from "react";

const AudioList = ({ albums }) => {
  return (
    <div className="audio__list">
      <p className="audio__title">Albums</p>
      <div className="songsContainer">
        {/* START */}
        {albums.length &&
          albums.map((album) => {
            const { images, name, total_tracks, album_type, id } = album;
            const image = images[0];
            return (
              <Link key={album.id} href={`/album/${id}`} className="songs">
                <div className="song">
                  <div className="img__box">
                    <img src={image.url} alt="" />
                  </div>
                  <div className="section">
                    <p className="song__name">
                      {name}
                      <span> {album_type}</span>
                    </p>
                    <div className="hits">
                      <p className="duration">{total_tracks}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default AudioList;
