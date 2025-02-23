import MovieCard from "../components/MovieCard"
import {useState} from "react"
function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "The Lion King", release_date: 1999 },
        { id: 2, title: "The Matrix", release_date: 2000 },
        { id: 3, title: "John Wick", release_date: 1998 },
    ]

    const handleSearch = (e) => {
        e.preventDefault() // don't allow the event onSumit refresh the page
        alert(searchQuery) // no need to add curly bracket here, as this is a Javascript function, not JSX
        setSearchQuery("--------------")
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>
        

        <div className="movies-grid">
            {
                // for dynamic rendering, you need to have a unqiue "key" property for component even itself does not have the "key" property
                movies.map(movie => <MovieCard movie={movie} key={movie.id} />)
            }
        </div>
    </div>
}

export default Home