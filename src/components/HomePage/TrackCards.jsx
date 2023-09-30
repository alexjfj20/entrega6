import React from "react";
import { addTrack } from "../../store/slices/track.slic";
import { useDispatch, useSelector } from "react-redux";

const TrackCards = ({ track }) => {

  const dispatch = useDispatch()

  const handleAddTrack = () => {
     
    dispatch( addTrack(track))
  }

  const trackPlayList = useSelector(store => store. tracks)

 

  return (
    <section className="container">
      <header className="header__img">
        <img src={track.album.images[0].url} alt="Album Cover" />
      </header>
      <article>
        <h3>{track.name}</h3>
        <ul>
          {track.artists.map((artist) => {
            <i key={artist.id}>{artist.name} </i>; 
          })}
        </ul>
      </article>
      <footer>
        <div>
      <a target="_blank"  href={track.external_urls.spotify}>
          <i className="bx bxl-spotify"></i>
          </a>
        </div>
        <div onClick={handleAddTrack}>
          <i  className="bx bx-plus-circle"></i>
        </div>
      </footer>
    </section>
  );
};

export default TrackCards;
