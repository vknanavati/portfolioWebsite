import { AppBar,Container,Toolbar, Typography, Box} from '@mui/material';
import {Link, Outlet} from 'react-router-dom';
// import './App.css';

export function RecipeApp({makeRecipe, favorites}) {

  const navLinkStyles = {
    color: "#00F7FF",
    textShadow: "0 0 8px #00F7FF",
    '&:hover': {
      color: "#40FBFF",
      textShadow: `
        0 0 8px #00F7FF,
        0 0 12px #00F7FF,
        0 0 16px #00F7FF,
        0 0 24px #00F7FF
      `
    }
  };

  return (
    <Container maxWidth={"false"} disableGutters>
      <AppBar
        position="fixed"
        sx={{
          marginTop: "128px",
          background: "linear-gradient(to right, #0D0D19E6, #260D26E6)",
        }}
      >
        <Toolbar>
          <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            textAlign: "center",
            gap:2,
            ml: "auto",
            fontSize: 20,
            fontWeight: 500,
            whiteSpace: "nowrap",
            overflow: "auto",
            flexShrink: 1,
            fontFamily: "'Tilt Neon', sans-serif"
          }}>
            <Typography variant="h6" component={Link} to="/recipe/homeRecipe"  sx={{ textDecoration: 'none', ...navLinkStyles }}>
              Home
            </Typography>
            <Typography variant="h6" component={Link} to="/recipe/aboutRecipe" color="inherit" sx={{ textDecoration: 'none', ...navLinkStyles }}>
              About
            </Typography>
            <Typography variant="h6" component={Link} to="/recipe/favorites" color="inherit" sx={{ textDecoration: 'none', ...navLinkStyles }}>
              Favorites ({favorites !== null && (favorites.length)})
            </Typography>
            <Typography variant="h6" component={Link} to="/recipe/make" color="inherit" sx={{ textDecoration: 'none', ...navLinkStyles }}>
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
