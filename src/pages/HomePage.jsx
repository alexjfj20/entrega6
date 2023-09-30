import React, { useEffect, useRef, useState } from "react";
import useFetche from "../hooks/useFetch";
import TrackCards from "../components/HomePage/TrackCards";

const HomePage = () => {
  const [listTracks, getLisTracks] = useFetche();

 const [inputValue, setInputValue] = useState('ricardo arjona') // guardar inputSearch linia > inputSearch.current.value.trim.toLowerCase()
 
 const [quantityPerPage, setquantityPerPage] = useState (10)

 useEffect(() => {

  getLisTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)


 }, [inputValue, quantityPerPage])

  useEffect(() => {
    getLisTracks(`/api/tracks?limit=1&q=${inputValue}`);
  }, []);
  console.log(listTracks);

const inputSearch = useRef()

const handleSearch = e => {
    e.preventDefault()
    setInputValue(current.value.trim().toLowerCase())
   
}

const handleTracksPerPage = e => {
  setquantityPerPage(e.target.value)

}

//  <select defaultValue={10}>  sale automatico la 10 caciones al regargar la pagina
  return (
    <div>
      <div>
        <form onSubmit={handleSearch}>
       <input ref={inputSearch} tipe="text" />
        <select onChange={handleTracksPerPage} defaultValue={10}> 
          {
            [2, 4, 6 , 8 , 10].map(trackPerpage => (
             <option
              key={trackPerpage}
              value={trackPerpage}
              >{trackPerpage}
              </option>

            ))

          }
        </select>
        </form>
     
        <div>
          {listTracks?.tracks.items.map((track) => (
            <TrackCards
             key={track.id}
              track={track}
               />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
