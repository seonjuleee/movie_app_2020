// 실제로 movies를 render하기
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css"; 
//state 필요 X -> class component 사용하지 않아도 됨 -> func component로 만들자

function Movie({ id, year, title, summary, poster, genres }) {
    return (
    <div className="movies_movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie_data">
        <Link to={{
            pathname: `movie/${id}`,
            // pathname: '/movie-detail',
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <h3 className="movie_title">{title}</h3>
        </Link>
            <h5 className="movie_year">{year}</h5>
            {/* map에 있는 각각 item은 key가 필요함 */}
            <ul className="genres">{genres.map((genre, index) => (
                <li key={index} className="genres_genre">{genre}</li>
                ))}
            </ul>
            <p className="movie_summary">{summary.slice(0, 300)}</p>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;