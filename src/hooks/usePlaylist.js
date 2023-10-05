import axios from "axios"
import { useState } from "react"
import { setTracksSlice } from "../store/slices/track.slic"
import { useDispatch } from 'react-redux';
import getConfigToken from "../services/getConfigToken";

const usePlayList = () => {

 const [palylist, setPlayList] =  useState([])
 const baseUrl = 'https://playlist-share-dev.fl0.io'
 const dispatch = useDispatch()

  const getPlayList = () => {
    const url = `${baseUrl}/api/playlists/me`
     axios.get(url, getConfigToken())
     .then(res => setPlayList(res.data))
     .catch(err => console.log(err))

  }

  const posPlaylist = (data) => {
    const url = `${baseUrl}/api/playlists`
    axios.post(url, data, getConfigToken())
    .then(res => {

     console.log(res.data)
     setPlayList([...palylist, res.data.info])
     dispatch(setTracksSlice([]))
    })
    .catch(err => console.log(err))
  }

  const deletePlaylist = (id) => {
    const url = `${baseUrl}/api/playlists/${id}`
    axios.delete(url, getConfigToken())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

  }

 return {palylist, getPlayList, posPlaylist, deletePlaylist}

}
export default usePlayList