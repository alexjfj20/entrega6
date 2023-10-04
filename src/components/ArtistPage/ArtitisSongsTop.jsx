import React from 'react'
import { deleteTrack } from '../../store/slices/track.slic'
import { useDispatch } from 'react-redux'

const  ArtitisSongsTop = ({tracks}) => {


const dispatch = useDispatch()

consta = handleDelete = () => {

    dispatch(deleteTrack(tracks))
}  




  return (
    <Selection>
     <h3>Songs top</h3>
      <div>
          {
               tracks?.map(trackInfo => (
                    <TrackCard 
                      key={trackInfo}
                      tracks={trackInfo}
                    
                    
                    />

               ))
             
          }
      </div>

    </Selection>
  )
}

export default ArtitisSongsTop