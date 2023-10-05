import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useEffect } from "react";
import ProtecteRoutes from "./pages/ProtecteRoutes";
import { useDispatch } from "react-redux";
import { setCredentialsSlice } from "./store/slices/creadentials.slice";
import ArtistPage from "./pages/ArtistPage";
import TracksPage from "./pages/TracksPage";
import PlaylistPage from "./pages/PlaylistPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("toke");
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const obj = { token, username, email };
    dispatch(setCredentialsSlice(obj));
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/register' element={<RegisterPage />} />

        <Route element={<ProtecteRoutes />} >
        <Route path='/' element={<HomePage />} />
        <Route path='/track/:id' element={<TracksPage />} />
        <Route path='/artist/:id' element={<ArtistPage />} />
        <Route path='/Playlist' element={<PlaylistPage />} />

        </Route >
      </Routes>
    </div>
  );
}

export default App;
