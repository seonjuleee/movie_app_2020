import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        if(location.state) {
            return (
                <div className="detail">
                    <div className="img">
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                    </div>
                    <div className="detail_data">
                        <h3 className="title">{location.state.title}</h3>
                        <h5 className="year">{location.state.year}</h5>
                        <ul>
                            {location.state.genres.map((genre, index) => {
                                return (
                                    <li key={index} className="genre">{genre}</li>
                                )
                            })}
                        </ul>
                        <div className="summary">{location.state.summary}</div>
                    </div>
                    
                </div>
                
            );
        } else {
            return null;
        }
        // return <span>{location.state.title}</span>
    }
}

export default Detail;