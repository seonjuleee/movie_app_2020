import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

// home을 다시 가면 항상 로딩을 다시한다.
// state가 없어지기 때문
// redux 사용하면 문제 해결 가능!
// redux가 state를 스크린 밖에 있도록 해줌

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const {
            data: {
                 data :{ movies }
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoading: false });
    }
    componentDidMount() {
        this.getMovies();
    }
    render() { 
        const {isLoading, movies} = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie => {
                            return(
                            <Movie 
                                key={movie.id}
                                id={movie.id} 
                                year={movie.year} 
                                title={movie.title} 
                                summary={movie.summary} 
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                            );
                        })}
                    </div>
                )}
            </section>
        )
    }
}

export default Home;
