import Hero from './Hero';
import { Link } from 'react-router-dom';

const MovieCard = ( {movie} ) => {
    let posterUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
    if(movie.poster_path) {
        posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    }
    const detailUrl = `/movies/${movie.id}`
    return (
        <div class="col-md-3 col-6 my-4">
            <div className="card">
                <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}

const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`
    const resultsHTML = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
        })
    if(resultsHTML.length > 1) {
        return (
            <>
            <Hero text = {title} />
            {resultsHTML &&
                <div className ="container">
                    <div className="row">
                        {resultsHTML}
                    </div>
                </div>
            }
            </>  
        );
    }
    else {
        return (
            <>
            <Hero text = {title} />
            <h1>No Results Found</h1>
            </>
        );
    }
};

export default SearchView;