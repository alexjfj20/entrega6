import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ArtistAlbum from "../components/ArtistPage/ArtistAlbum";
import ArtitisSongsTop from "../components/ArtistPage/ArtitisSongsTop";

const ArtistPage = () => {
  const { id } = useParams();

  const [artist, getArtist] = useFetch();

  useEffect(() => {
    getArtist(`/api/artists/${id}`);
  }, [id]);

  console.log(artist);

  return (
    <div>
      <Link to='/'>Atras</Link>
      <ArtistInfo 
         artist={artist}
      />

      <ArtistAlbum 
        albums={artist?.albums}
      />

      <ArtitisSongsTop
      
         tracks={artist?.songsTop}
      
      />

    </div>
  );
};

export default ArtistPage;
