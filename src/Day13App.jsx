import "./Day13App.css";
import { useState, useEffect } from 'react';                       
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate} from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "./global";

export default function D13App(){
  const [movielist, setmovieList] = useState([])

  const getMovies = () => {  
    fetch(`${API}/movies`, {
      method: "GET",
    })
    .then((data) => data.json())
    .then((mvs) => setmovieList(mvs))
  };

  useEffect(() => getMovies(), []);


  
  const deleteMovie = async (id) => {                                        // new - deleteMovie function variable - D12
    console.log("Deleting movie...", id)
    await fetch(`${API}/movies/${id}`,{
      method: "DELETE"
    }).then(() => getMovies());
  };

  return(
    <div>
      <div className='movieMap'>
        {movielist.map((mv)=> <D13B key={mv.id} movie={mv} id={mv.id}
          deleteButton={
            <IconButton 
              sx = {{marginLeft: "auto"}}
              color="error" 
              onClick={() => deleteMovie(mv.id)}
            > 
              <DeleteIcon/> 
            </IconButton>
          }     
        />)} 
      </div>
    </div>
  )
}

// This component name as been provided as function Movie(){... in the class coding
function D13B({movie, id, deleteButton}){
  const Rating = {
    color:movie.rating > 8.5 ? "green" : "red",
  }
  const [show, setShow] = useState(true)
  const toggleSummary = {
    display : show ? 'block' : 'none',
  }
  const navigate = useNavigate();
  return(
    <div className='movie-continer'>
    <Card >
      <img className="moviePoster" src={movie.poster} alt={movie.name} />
      <CardContent>
        <div className='wrap'>
          <h2 className="movieName">
            {movie.name}
            <IconButton 
              className="reduce-focuse-outline"
              color="primary" 
              onClick={() => setShow(!show)} 
              aria-label="Toggle Summary"
            >
              {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
            </IconButton>
            <IconButton 
              className="reduce-focuse-outline" 
              color="primary" 
              aria-label="Movie Details"
              onClick={()=> navigate(`/movies/${id}`)}
            >
              <InfoIcon/>
            </IconButton>
          </h2>
          <p style = {Rating} className="movieRating">✨{movie.rating}</p>
        </div>
        <p style = {toggleSummary} className="movieSummary">{movie.summary}</p>
      </CardContent>
      <CardActions>
        <Count/>{deleteButton}                 {/* props render */}
      </CardActions>
    </Card>
 </div>
  )
}

function Count(){
  const[like, setLike] = useState(0);
  const[disLike, setDisLike] = useState(0);

  return(
    <div>
      <IconButton 
        onClick={() => setLike(like + 1)} 
        color='primary' 
        aria-label="like movie"
        className="reduce-focuse-outline"
      >
        <Badge 
          badgeContent={like} 
          color="primary"
        >
          👍
        </Badge>
      </IconButton>

      <IconButton 
        onClick={() => setDisLike(disLike + 1)} 
        color='error' 
        aria-label="dislike movie"
        className="reduce-focuse-outline"
      >
        <Badge 
          badgeContent={disLike} 
          color="error"
        >
          👎
        </Badge>
      </IconButton>
    </div>
  )
}