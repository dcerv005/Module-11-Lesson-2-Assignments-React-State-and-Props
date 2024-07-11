//2. Enhancing Functional Components with React Hooks
import React, { useState } from 'react';

const MoviesList = () => {
    const[movies, setMovies]=useState([{description: "descriptions", title: "Terminator", genre: "Action"}, {description: 'description', title:"The Gentleman", genre: "f"}])
    const [showDescription, setShowDescription]=useState({});
    const [showAction, setShowAction]= useState(false);
    const [allMovies, setAllMovies] = useState(true)
    const filteredMovies = showAction ? movies.filter(movie => movie.genre === 'Action') : movies;
   
    // Initialize state with a list of movies
    // Implement required functionalities here
    const showActionMovie = () => {
        setShowAction((prevValue) => !prevValue)
        setAllMovies(!allMovies)
        
    }
    
    const movieClick = (index) => {
        setShowDescription((prevDetails) => ({
            ...prevDetails,
            [index]: !prevDetails[index],
        }));
        
    }
    const deleteMovie = (index) => {
        setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
    }

    return (
        <div>
            
            <ul>
                {filteredMovies.map((movie, index) =>(
                    <li key={index}>
                        <button onClick={() => movieClick(index)}>
                            {movie.title}
                        </button> 
                        {showDescription[index] && (
                            <>
                                <h2>{movie.title}</h2> 
                                <p>{movie.description}</p>
                            </>
                        )}
                        <button onClick={() => deleteMovie(index)}>
                            Delete
                        </button>
                    </li>))}
            </ul>
           {allMovies ? <button onClick={showActionMovie}> Show Action Movies</button> : <button onClick={showActionMovie}> Show All Movies</button>             }
        </div>
    );
};
export default MoviesList;