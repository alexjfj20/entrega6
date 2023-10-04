import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import TrackCards from "../HomePage/TrackCards";

const TracksRelated = ({artist}) => {
  const [trackLists, getTrackList] = useFetch();

  useEffect(() => {
    if (artist) {
      getTrackList(`/api/tracks?limit=10&q=${artist} `);
    }
  }, [artist]);

  console.log(trackLists)

  return (
    <section>
      <div>TracksRelated</div>
      <div>
        {trackLists?.tracks.items.map((track) => (
          <TrackCards key={track.id} track={track}
          
          />
        ))}
      </div>
    </section>
  );
};

export default TracksRelated;
