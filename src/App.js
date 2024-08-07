import {Link, Routes, Route} from 'react-router-dom';
import {Home} from './components/Home';
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
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/todo" style={{ color: 'white', textDecoration: 'none' }}>To Do List</Link>
            <Link to="/weather" style={{ color: 'white', textDecoration: 'none' }}>Weather</Link>
            <Link to="/currency" style={{ color: 'white', textDecoration: 'none' }}>Currency Converter</Link>
            <Link to="/countdown" style={{ color: 'white', textDecoration: 'none' }}>Countdown</Link>
            <Link to="/counter" style={{ color: 'white', textDecoration: 'none' }}>Counter</Link>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home/>}/>
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