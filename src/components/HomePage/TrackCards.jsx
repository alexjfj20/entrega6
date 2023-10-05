import React from "react";
import { addTrack } from "../../store/slices/track.slic";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const TrackCards = ({ track }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddTrack = () => {
     
    dispatch( addTrack(track))

   

    
  }
 const trackPlayList = useSelector(store => store. tracks)

 const handleArtist = () => {
     navigate(`/artist/${id}`)  
 
 }

  return (
    <section className="container">
      <header className="header__img">
        <img src={track.album.images[0].url} alt="Album Cover" />
      </header>
      <article>
       <Link to={`/track/${track.id}`}><h3>{track.name}</h3></Link>
        <ul>
          {track.artists.map((artist) => {
            <li onClick={() => handleArtist(artist.id)}
             key={artist.id}
             >{artist.name} </li>; 
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
