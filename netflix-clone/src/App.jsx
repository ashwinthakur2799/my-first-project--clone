import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import MovieSection from './MovieSection.jsx'
import Footer from './Footer.jsx'
import './App.css'
import axios from "axios";
import { useState } from 'react'

function App() {
  const[movie,setmovie]=useState([])
  function ashwin(){
    axios
   .get(' http://www.omdbapi.com/?i=tt3896198&apikey=ce02600d')
   .then(function (response) {
    console.log(response);
    setmovie(response.data)
    console.log(movie)
  })
  }
  return (
    <>
      <Navbar />
      <Hero />
       <button onClick={ashwin}>button</button>
      <MovieSection />
      <Footer />
    </>
  )
}

export default App


