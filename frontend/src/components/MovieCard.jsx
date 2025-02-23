import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
const MOVIE_MEDIA = "https://media.themoviedb.org/t/p/w500"

function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()

    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e){
        e.preventDefault()
        if (favorite) {
            removeFromFavorites(movie.id)
        } else {
            addToFavorites(movie)
        }
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`${MOVIE_MEDIA}${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite? "active" : ""}`} onClick={onFavoriteClick}>❤️</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard