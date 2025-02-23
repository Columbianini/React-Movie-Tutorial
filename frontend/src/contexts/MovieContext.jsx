// provide global state and state management for movies

import { createContext, useState, useContext, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

// provide state to any of the components that are wrapped around it, like BrowserRouter
// children is a reserved prop when you write a compoennt and children is anything thats inside of the component that you rendered, App is BrowserRouter's children
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    // local storage allow us to store values directly in our browser
    useEffect(() => {
        const storedFavs = localStorage.getItem('favorites')

        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}