import React from "react";
import { useEffect } from "react";
import './App.css'
import './search.svg'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
import {useState} from "react";

// 4547a019

const API_URL = 'https://www.omdbapi.com?apikey=4547a019';


const App = () =>{
    const [movies,setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
        
    }
    useEffect(()=>{
        searchMovies('');
    },[])
    return (
        <div className="app">
            <h1>Movies and TV Shows</h1>
            <div className="search">
                <input 
                placeholder="Search for Movies and TV Shows"
                value = {searchTerm}
                onChange={(e) =>setSearchTerm(e.target.value)}/>
                <img src = {SearchIcon}
                alt = "search"
                onClick={()=>searchMovies(searchTerm)}/>
            </div>
            { movies?.length > 0
                    ?(
                    <div className="container">
                    {movies.map((movie)=>
                    <MovieCard movie = {movie}/>)}
            
                    </div>
                ) : (
                <div className="empty">
                <h2> No Movies Found</h2>        
                </div>)

            }
            
        </div> 
    )
}

export default App;