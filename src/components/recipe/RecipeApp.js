import { AppBar,Container,Toolbar, Typography, Box} from '@mui/material';
import {Link, Outlet} from 'react-router-dom';
// import './App.css';

export function RecipeApp({makeRecipe, favorites}) {

  return (
    <Container maxWidth={"false"} disableGutters>
      <AppBar position="fixed" sx={{backgroundColor: '#3A5B26', marginTop: "64px"}}>
        <Toolbar>
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
            <Typography variant="h6" component={Link} to="/recipe/homeRecipe" color="inherit" sx={{ textDecoration: 'none' }}>
              Home
            </Typography>
            <Typography variant="h6" component={Link} to="/recipe/aboutRecipe" color="inherit" sx={{ textDecoration: 'none' }}>
              About
            </Typography>
            <Typography variant="h6" component={Link} to="/recipe/favorites" color="inherit" sx={{ textDecoration: 'none' }}>
              Favorites ({favorites !== null && (favorites.length)})
            </Typography>
            <Typography variant="h6" component={Link} to="/recipe/make" color="inherit" sx={{ textDecoration: 'none' }}>
              Recipes ({makeRecipe.length !== null && (makeRecipe.length) })
              {console.log("****MAKE RECIPE NAV LINK: ", makeRecipe.length > 0 && (makeRecipe.length))}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet/>
    </Container>
  );
}
