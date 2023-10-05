import React from "react";
import { useSelector } from "react-redux";
import TrackList from "./TrackList";
import usePlayList from "../../hooks/usePlaylist";
import {useForm} from "react-hook-form"

const HeaderMusic = () => {
  const tracksPlaylist = useSelector((store) =>  store.tracks);
 const { posPlaylist }  = usePlayList()


  const {reset, handleSubmit, register} = useForm() 

  const submit = data => {
    
    const obj = {
      ...data,
      tracks: tracksPlaylist.map(e => ({id: e.id}) )
    }
    posPlaylist(obj)
    reset({
      title: '',
      to: '',
      message: ''

    })

  }

   
  return (
    <header>
      <h1>Gift Music</h1>

      <div>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="title">Title</label>

            <input {...register('title')} type="text" id="title" name="title" />
          </div>

          <div>
            <label htmlFor="to">To</label>

            <input {...register('to')}type="text" id="to" name="to" />
          </div>

          <div>
            <label htmlFor="message">Message</label>

            <textarea {...register('message')} id="message" name="message" />
          </div>
          <div>
            {tracksPlaylist.map((track) => (
              <TrackList
               key={track.id}
               track={track}
              />
            ))}
          </div>

          <button type="submit" >Create</button>
        </form>
      </div>
    </header>
  );
};

export default HeaderMusic;
