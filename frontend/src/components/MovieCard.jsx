import "../css/MovieCard.css"
const MOVIE_MEDIA = "https://media.themoviedb.org/t/p/w500"

function MovieCard({movie}) {
    function onFavoriteClick(){
        alert("clicked")
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`${MOVIE_MEDIA}${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>❤️</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard