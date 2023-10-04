import D2App from './D2App';
import { AddColorD5E1 } from "./Day5AddColorD5E1";
import {TicTacToe} from './Day7TTT.jsx'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {useState} from "react";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from './MovieDetails';
import D13App from './Day13App'; 
import { BasicForm } from './BasicForm';
import {AddMovie} from './AddMovie';

export default function App() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bgStyles = {
    borderRadius: '0px',
    minHeight:"100vh",
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper  elevation={4}/>
      <div className="entireStr">
      <AppBar position='static' >
        <Toolbar >
          <Button onClick={()=> navigate('/')} color='inherit'>Home</Button>
          <Button onClick={()=> navigate('movies')} color='inherit'>Movies</Button>
          <Button onClick={()=> navigate('/color-game')} color='inherit'>Color Game</Button>
          <Button onClick={()=> navigate('/tictactoe-game')} color='inherit'>Tic Tac Toe</Button>
          <Button onClick={()=> navigate('/movies/add')} color='inherit'>Add Movie</Button>
          <Button 
            sx={{marginLeft:"auto"}}
            color="inherit" 
            onClick={()=>setMode(mode==="light"?"dark":"light")}
            startIcon = {mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}                                
          >
            {mode}                                     
            Mode 
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movies' element={<D13App />}/>
        <Route path='/color-game' element={<AddColorD5E1/>}/>
        <Route path='/tictactoe-game' element={<TicTacToe replace to ='/XO-game' />}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}/>
        <Route path="/movies/add" element={<AddMovie/>}/>
        <Route path="/basic-form" element={<BasicForm/>}/>                   {/* new - Day13 */}
      </Routes>
      </div>
    </ThemeProvider>
  )
}

function Home(){
  return(
    <h1 className="home">
      Hellow World✨🎁
    </h1>
  )
}
      
function NotFound(){
  return(
    <div className='not-found-error'>
      <h1 className="red"> Error!!! </h1>
      <img 
        src='https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif'
        alt="404 not found"
        className='not-found'
      />
    </div>
  )
}