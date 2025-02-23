import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorites() {
    const {favorites} = useMovieContext();

    if (favorites) {
        return (
        <div className='favorites'>
            <h2>Favorites</h2>
            <div className="movies-grid">
            {favorites.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>)
    }

    return <div className="favorites-empty">
        <h2>No favorite movie yet</h2>
        <p>Start adding movies to your favorites and they wil appear here</p>
    </div>
}

export default Favorites  