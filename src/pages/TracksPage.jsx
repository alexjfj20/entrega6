import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import TracksRelated from "../components/TrackPage/TracksRelated";
import TrackInfo from "../components/TrackPage/TrackInfo";

const TracksPage = () => {
  const { id } = useParams(); /* CAPTURA LOS PALAMETRO DE LA RUTAS de un obj */

  const  [track, getTrack ] = useFetch();

  useEffect(() => {
    getTrack(`/api/tracks/${id}`); /* getTrack = axios */
  }, [id]); /* [] = se llama arreglo de dependencia */



  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div onClick={handleBack}>Back</div>
      <TrackInfo 
         track={track}
      />
      <TracksRelated
       
       artist={track?.artists[0].name}
      
      />
    </div>
  );
};

export default TracksPage;
