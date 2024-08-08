import {Link, Routes, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {ToDoList} from './components/ToDoList';
import {Weather} from './components/Weather';
import {Currency} from './components/Currency';
import {Countdown} from './components/Countdown';
import {Counter} from './components/Counter';
import {Contact} from './components/Contact';
import {AppBar, Toolbar, Box} from '@mui/material';

function App() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#A44CD3' }}>
        <Toolbar>
          <Box sx={{display: "flex", gap:2, ml: "auto"}}>
            <Box
              component={Link}
              to="/"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Home
            </Box>
            <Box
              component={Link}
              to="/about"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                About
            </Box>
            <Box
              component={Link}
              to="/todo"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
            >
              To Do List
            </Box>
            <Box
              component={Link}
              to="/weather"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Weather
            </Box>
            <Box
              component={Link}
              to="/currency"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Currency Converter
            </Box>
            <Box
              component={Link}
              to="/countdown"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Countdown
            </Box>
            <Box
              component={Link}
              to="/counter"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Counter
            </Box>
            <Box
              component={Link}
              to="/contact"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Contact
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/todo" element={<ToDoList/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/currency" element={<Currency/>}/>
        <Route path="/countdown" element={<Countdown/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;