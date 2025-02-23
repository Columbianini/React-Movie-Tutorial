import MovieCard from "../components/MovieCard"
import {useState, useEffect} from "react"
import '../css/Home.css'
import {searchMovies, getPopularMovies} from '../services/api'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Fail to load movies ...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, []) // add side effect to components/functions and define when they should run depending on the list of dependencies
    // const movies = [
    //     { id: 1, title: "The Lion King", release_date: 1999 },
    //     { id: 2, title: "The Matrix", release_date: 2000 },
    //     { id: 3, title: "John Wick", release_date: 1998 },
    // ]

    const handleSearch = async (e) => {
        e.preventDefault() // don't allow the event onSumit refresh the page
        if (!searchQuery.trim()) {
            return
        }
        if (loading) return
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Fail to search movies ...")
        } finally {
            setLoading(false)
        }
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>
        {error && <div className="error">{error}</div>}
        {loading ? (<div className="loading">Loading...</div>) : 
        (<div className="movies-grid">
            {
                // for dynamic rendering, you need to have a unqiue "key" property for component even itself does not have the "key" property
                movies.map(movie => <MovieCard movie={movie} key={movie.id} />)
            }
        </div>)};
    </div>
}

export default Home