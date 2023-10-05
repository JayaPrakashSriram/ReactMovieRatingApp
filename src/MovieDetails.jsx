import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/keyboardBackspace'; // initial code
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'; //again from MUI
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"; //karthi
import { useEffect, useState } from "react";
import { API } from "./global";

export function MovieDetails() {
  const { id } = useParams();
  const[movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })   
    .then((data) => data.json())
    .then((mvs) => setMovie(mvs));
  }, [id]);
  console.log(movie);

  const Rating = {
    color: movie.rating > 8.5 ? "green" : "red",
  };
  const Navigate = useNavigate();

  return (
    <div className="mov-detail-through-i-btn">
      <iframe
        height="400"
        width="750"
        src={movie.trailer}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      >
      </iframe>
      <div className='movie-detail-continer'>
        <div className='wrap'>
          <h2 className="movieName">
            {movie.name}
          </h2>
          <p style={Rating} className="movieRating">✨{movie.rating}</p>
        </div>
        <p className="movieSummary">{movie.summary}</p>
        <Button startIcon={<KeyboardBackspaceIcon />} variant='contained' onClick={() => Navigate(-1)}>Back</Button>
      </div>
    </div>
  );
}