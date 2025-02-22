import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from "./components/MovieCard"


function App() {
  const movieNumber = 2;


  return (
    <>
      {movieNumber == 1 ? (<MovieCard movie={{ title: "Tim's Film", release_date: "2024" }} />) : (<MovieCard movie={{ title: "Joe's Film", release_date: "2020" }} />)}
      {movieNumber == 1  && <MovieCard movie={{ title: "Kim's Film", release_date: "2024" }}/>}
    </>
  );
}

export default App
