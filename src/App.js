import {Link, Routes, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {Hostel} from './components/Hostel';
import {ToDoList} from './components/ToDoList';
import {Weather} from './components/Weather';
import {Currency} from './components/Currency';
import {Countdown} from './components/Countdown';
import {Counter} from './components/Counter';
import {Contact} from './components/Contact';
import {AppBar, Toolbar, Box, Container, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif'
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'Poppins, sans-serif'
          }
        }
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth={"false"} disableGutters>
      <AppBar position="static" sx={{ backgroundColor: '#A44CD3' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap' }}
        >
          <Box
            sx={{
              flexShrink: 0,
              paddingLeft: 1,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.10)",
              },
            }}
          >
            <Typography
              variant="h5"
              component={Link}
              to="/contact"
              sx={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Vimin Nanavati
            </Typography>
          </Box>
          <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                textAlign: "center",
                gap:2,
                ml: "auto",
                fontSize: 20,
                fontWeight: 500,
                whiteSpace: "nowrap",
                overflow: "auto",
                flexShrink: 1
              }}>
            <Typography
              component={Link}
              to="/"
              sx={{
                color: 'white',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Home
            </Typography>
            <Typography
              component={Link}
              to="/about"
              sx={{
                color: 'white',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                About
            </Typography>
            <Typography
              component={Link}
              to="/hostel"
              sx={{
                color: 'white',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Hostel Graphs
            </Typography>
            <Typography
              component={Link}
              to="/todo"
              sx={{
                color: 'white',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
            >
              To Do List
            </Typography>
            <Typography
              component={Link}
              to="/weather"
              sx={{
                color: 'white',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Weather
            </Typography>
            {/* <Typography
              component={Link}
              to="/currency"
              sx={{
                color: 'white',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Currency Converter
            </Typography> */}
            <Typography
              component={Link}
              to="/countdown"
              sx={{
                color: 'white',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Countdown
            </Typography>
            <Typography
              component={Link}
              to="/counter"
              sx={{
                color: 'white',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Counter
            </Typography>
            <Typography
              component={Link}
              to="/contact"
              sx={{
                color: 'white',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/hostel" element={<Hostel/>}/>
        <Route path="/todo" element={<ToDoList/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/currency" element={<Currency/>}/>
        <Route path="/countdown" element={<Countdown/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Container>
    </ThemeProvider>
  );
}

export default App;