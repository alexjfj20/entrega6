import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TrackInfo = ({ track }) => {


const navigate = useNavigate();

const handleBack = () => {
  navigate(-1);
} 
  const [isShowPlayer, setIsShowPlayer] = useState(false);
  const handlePlayer = () => {
    setIsShowPlayer(
      !isShowPlayer
    ); /* culpamos y mostramso si es trus : semuestra y es false: se oculta */
  };

  return (
    <div>
      <div onClick={handleBack}>Back</div>
      <article>
        <header>
          <img className="artist_04" onClick={handlePlayer} src={track?.album.images[0].url} alt="" />
        </header>
        <section>
          <h3>{track?.name}</h3>
          <ul>
            {track?.artists.map((artist) => (
              <li key={artist.id}>{artist.name}</li>
            ))}
          </ul>
          <p>
            <samp>album: </samp>
            {track?.album.name}
          </p>
          <p>
            <samp>Release date: </samp>
            {track?.album.release_date}
          </p>
        </section>
      </article>
      {isShowPlayer && (
        <iframe
          style={{ borderRadius: "12px" }}
          src={`https://open.spotify.com/embed/track/${track?.id}?utm_source=generator&theme=0`}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          picture-in-picture
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
};

export default TrackInfo;
