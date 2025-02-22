import MovieCard from "../components/MovieCard"
function Home() {
    const movies = [
        { id: 1, title: "The Lion King", release_date: 1999 },
        { id: 2, title: "The Matrix", release_date: 2000 },
        { id: 3, title: "John Wick", release_date: 1998 },
    ]

    const handleSearch = () => {

    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" />
        </form>
        <button type="submit" className="search-button">Search</button>

        <div className="movies-grid">
            {
                // for dynamic rendering, you need to have a unqiue "key" property for component even itself does not have the "key" property
                movies.map(movie => <MovieCard movie={movie} key={movie.id} />)
            }
        </div>
    </div>
}

export default Home