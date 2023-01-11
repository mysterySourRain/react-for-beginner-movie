import {useEffect,useState} from "react";
import Movie from "../components/Movie";
import "./Home.css"

function Home(){
    const[movies,setMovies]=useState([]);
    const[loading, setLoading]=useState(true);
    useEffect(() => {
      fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    .then((response)=> response.json())
    .then((json) => {
      setMovies(json.data.movies);
      setLoading(false);
    });
  },[]);
    return (<div>
      {loading ? <h1>loading...</h1>: 
      movies.map((movie)=>(
        <Movie key={movie.id} 
        id={movie.id}
        medium_cover_image={movie.medium_cover_image}
         title={movie.title}
        summary={movie.summary} genres={movies.genres} />))}
    </div>);   
}

export default Home;