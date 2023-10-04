import React from "react";

const ArtstInfo = ({ artist }) => {
  return (
    <section>
      <header>
        <img className="artist_02" src={artist?.image[0].url} alt="" />
      </header>
      <artist>
        <h2>{artist?.name}</h2>
        <ul>
          <li>
            <span>Followers:</span>
            {artist?.follwoers.total}
          </li>
          <li>
            <span>Populatis:</span>
            {artist?.popularity}
          </li>
          <li>
            <span>Genres:</span>
            <ul>
              {artist?.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </li>
        </ul>
      </artist>
    </section>
  );
};

export default ArtstInfo;
