import React from "react";

function AlbumCard({ album }) {

  const yearReleaseDate = (new Date(album.realease_date)).getFullYear()


  return (
    <article>
      <header>
        <img className="artist_01" src={album.images[0].url} alt="" />
      </header>
      <h4>{album.name}</h4>
      <span>{yearReleaseDate}</span>
    </article>
  );
}

export default AlbumCard;
