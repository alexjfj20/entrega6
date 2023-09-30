import React from "react";

const trackList = ({ track }) => {
  return (
    <section>
      <header>
        <img src={track.album.images[0].url} alt="" />
      </header>
      <article>
        <h3>{track.name}</h3>
        <ul>
          {track.artists.map((artists) => (
            <li key={artists.id}>{artists.name}</li>
          ))}
        </ul>
      </article>
      <footer>
        <i className="bx bx-minus-circle"></i>
      </footer>
    </section>
  );
};

export default trackList;
