import { useState, useEffect } from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {RecipeApp} from './components/recipe/RecipeApp';
import {Favorites} from './components/recipe/Favorites';
import {MakeRecipe} from './components/recipe/MakeRecipe';
import {AboutRecipe} from './components/recipe/AboutRecipe';
import {HomeRecipe} from './components/recipe/HomeRecipe';
import {Hostel} from './components/Hostel';
import {ToDoList} from './components/ToDoList';
import {Weather} from './components/Weather';
import {CurrencyTwo} from './components/CurrencyTwo';
import {Countdown} from './components/Countdown';
import {Counter} from './components/Counter';
import {Wallpaper} from './components/Wallpaper'
import {AppBar, Toolbar, Box, Container, Typography, Alert, AlertTitle, Button, Drawer, ListItem, ListItemButton,ListItemText, List, IconButton, Divider} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function App() {

  const [foodData, setFoodData] = useState([]);
  const [recipeData, setRecipeData] = useState([]);
  const [groceryList, setGroceryList] = useState({});
  const [filteredRecipe, setFilteredRecipe] = useState([]);
  const [alertFavorite, setAlertFavorite] = useState(false);
  const [alertRemove, setAlertRemove] = useState(false);
  const [alertRecipe, setAlertRecipe] = useState(false)
  const [notes, setNotes] = useState("");
  const [notesList, setNotesList] = useState({});
  const [open, setOpen] = useState(false);

  const projects = [
    { name: 'Recipe Search', path: 'recipe/homeRecipe' },
    { name: 'Hostel Comparer', path: '/hostel' },
    { name: 'Countdown Timer', path: '/countdown' },

  ];

  // useEffect(()=>{
  //   localStorage.clear()
  // })

  // empty array dependency means useEffect runs once when the component mounts
  useEffect(()=>{
    const localGrocery = localStorage.getItem("grocery");
    setGroceryList( localGrocery ? JSON.parse(localGrocery) : {})
  }, [])

  useEffect(()=>{
    const localNotes = localStorage.getItem("notes");
    setNotesList( localNotes ? JSON.parse(localNotes) : {})
  }, [])

  const [favorites, setFavorites] = useState(()=> {
    return JSON.parse(localStorage.getItem("favorites")) || []
  });
  const [makeRecipe, setMakeRecipe] = useState(()=>{
    return JSON.parse(localStorage.getItem("make recipe")) || []
  });

  //this useEffect is triggered only when favorites array is not empty
  useEffect(() => {
    //favorites persists upon refresh in local storage when condition included
    if (favorites !== null) {localStorage.setItem("favorites", JSON.stringify(favorites))};
  }, [favorites]);

  useEffect(() => {
    if (makeRecipe !== null) {localStorage.setItem("make recipe", JSON.stringify(makeRecipe))};
  }, [makeRecipe]);

  useEffect(() => {
    if (groceryList !== null && Object.keys(groceryList).length > 0) {localStorage.setItem("grocery", JSON.stringify(groceryList))};
  }, [groceryList]);

  useEffect(() => {
    if (notesList !== null && Object.keys(notesList).length > 0) {localStorage.setItem("notes", JSON.stringify(notesList))};
  }, [notesList]);

  useEffect(() => {
    console.log("groceryList updated: ", JSON.stringify(groceryList));
    console.log("makeRecipe updated: ", JSON.stringify(makeRecipe));
    console.log("favorites updated: ", JSON.stringify(favorites));
    console.log("Favorites LENGTH: ", favorites.length)
  }, [groceryList, makeRecipe, favorites]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    //add and remove favorite recipe card
  const addFavorite = (recipe) => {
  //adds recipe only if it is not already in favorites list
  //if length of filtered array > 0 then it will not add the recipe
  //checking if recipe exists in favorites array
    const currentFavorites = favorites || [];
    if (!(currentFavorites.filter(item => item.label === recipe.label).length > 0)) {
      setFavorites([...currentFavorites, recipe]);
      setAlertFavorite(true);
      setTimeout(() => {
        setAlertFavorite(false)
        }, 3000);
    } else {
      //keeps item in array if label of the item doesn't match the label of the recipe being passed
      //so if 'heart button' is clicked again on recipe card it will remove that recipe because it already exists in favorites
      //this happens because the condition the array is to return array that doesn't match recipe being passed
      //so a new array is created excluding matching recipe label
      setFavorites(currentFavorites.filter((item)=> item.label !== recipe.label));
      setAlertRemove(true);
      setTimeout(()=>{
        setAlertRemove(false)
      }, 3000);
    }
    console.log("favorites:", JSON.stringify(favorites))
  }

  const addMakeRecipe = (recipe) => {
    if (!(makeRecipe.filter(item => item.label === recipe.label).length > 0)){
      setMakeRecipe([...makeRecipe, recipe]);
      setAlertRecipe(true);
      setTimeout(()=>{
        setAlertRecipe(false)
      }, 3000)
      console.log("makeRecipe: ", makeRecipe);
      console.log("recipe added to makeRecipe: ", recipe);
    } else {
        setMakeRecipe(makeRecipe.filter((item)=> item.label !== recipe.label));
        setAlertRemove(true);
        setTimeout(()=>{
          setAlertRemove(false)
        }, 3000);
        console.log("recipe removed: ", recipe);
    }
  }

  // onClick={() => addGrocery(recipe.label, ingredient.food)}
  const addGrocery = (recipeName, ingredient) => {

    setGroceryList((groceryObject)=>{

      //sets current ingredients to groceryObject[recipeName] or to empty array if groceryObject[recipeName] does not exists
      const currentIngredients = groceryObject[recipeName] || [];

      console.log("currentIngredients: ", currentIngredients);
      console.log("before adding new ingredient to groceryObject ", groceryObject);
      console.log("recipeName: ", recipeName);

      if (!currentIngredients.includes(ingredient)) {

        console.log("added new ingredient: ", ingredient)

        return { ...groceryObject, [recipeName] : [...currentIngredients, ingredient] };

      } else {
          console.log("ingredient already in list");

          const updatedIngredients = currentIngredients.filter((item) => item !== ingredient);

          return {...groceryObject, [recipeName]: updatedIngredients}
      }
    });
  }

  return (
    <Container maxWidth={"false"} disableGutters>
      <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none', alignItems: 'center' }}>
        <Toolbar sx={{ width: "100%", position: "relative", paddingTop: 5 }}>
          <Box
            sx={{
                position: "absolute",
                top: "15px",
                padding: 0,
                paddingLeft: 4,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.10)",},
            }}
          >
            <Button
              sx={{
                textShadow: "1px 1px 2px #00FFFF, 0 0 35px #00FFFF, 0 0 10.5px #00FFFF",
                // "&:hover": {
                //   textShadow: '0 0 20px #00FFFF, 0 0 20px #00FFFF, 0 0 10px #00FFFF',
                // },
                fontFamily: "'Tilt Neon', sans-serif",
                fontSize: 25,
                fontStyle: "italic",
                textTransform: "none",
                color: "#AEFFFF",
                fontWeight: 800,
              }}
              onClick={handleDrawerOpen}>
                Projects
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap:4,
              whiteSpace: "nowrap",
              overflow: "auto",
              flexGrow: 1
            }}
          >
            <Typography
              component={Link}
              to="/"
            >
              <Button
                sx={{
                  textShadow: '1px 1px 2px #00FFFF, 0 0 35px #00FFFF, 0 0 10.5px #00FFFF',
                  "&:hover": {
                    textShadow: '0 0 20px #00FFFF, 0 0 20px #00FFFF, 0 0 10px #00FFFF',
                  },
                  fontFamily: "'Tilt Neon', sans-serif",
                  fontSize: 35,
                  color: '#AEFFFF',
                  fontWeight: 800,
                }}
              >
                Home
              </Button>
            </Typography>
            <Typography
              component={Link}
              to="/about"
            >
              <Button
                sx={{
                  textShadow: '1px 1px 2px #00FFFF, 0 0 35px #00FFFF, 0 0 10.5px #00FFFF',
                  "&:hover": {
                    textShadow: '0 0 20px #00FFFF, 0 0 20px #00FFFF, 0 0 10px #00FFFF',
                  },
                  fontFamily: "'Tilt Neon', sans-serif",
                  fontSize: 35,
                  color: '#AEFFFF',
                  fontWeight: 800,
                }}
              >
                About
              </Button>
            </Typography>
            {/* <Typography
              component={Link}
              to="/recipe/homeRecipe"
              sx={{
                color: 'white',
                fontWeight: 600,
                fontSize: 30,
                textDecoration: 'none',
                '&:hover': { color: '#FFEB3B' },
                '&:active': { color: '#23FAFA' }
              }}
              >
                Recipe Cards
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
            <Typography
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
            </Typography>
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
            </Typography> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" variant="persistent" open={open}
      sx={{
        '& .MuiDrawer-paper': {
            width: 240,
            marginTop: '64px',
            height: 'calc(100% - 64px)',

        }
    }}
      >
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon/>
        </IconButton>
        <Divider/>
        <List>
          {projects.map((project, index) => (
            <ListItem key={index} component={Link} to={project.path} onClick={handleDrawerClose} disablePadding>
              <ListItemButton>
                <ListItemText primary={project.name}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>




      {alertFavorite && (
        <Alert
          severity="success"
          onClose={() => setAlertFavorite(false)}
          sx={{
            position: "fixed",
            top: "30px",// 20px from the top of the screen
            left: "50%", //left edge of alert at half the viewport width
            transform: "translateX(-50%)", // moves alert to the left at half the width of the alert box
            width: "auto", // adjust width based on content
            zIndex: 9999 // alert appears above other content
          }}
        >
          <AlertTitle>Success</AlertTitle>
          Recipe added to Favorites!
        </Alert>
      )}
      {alertRecipe && (
        <Alert
          severity="success"
          sx={{
            position: "fixed",
            top: "30px",// 20px from the top of the screen
            left: "50%", //left edge of alert at half the viewport width
            transform: "translateX(-50%)", // moves alert to the left at half the width of the alert box
            width: "auto", // adjust width based on content
            zIndex: 9999 // alert appears above other content
          }}
        >
          <AlertTitle>Success</AlertTitle>
          Added to Recipes
        </Alert>
      )}
      {alertRemove && (
        <Alert
          severity="warning"
          onClose={() => setAlertFavorite(false)}
          sx={{
            position: "fixed",
            top: "30px",// 20px from the top of the screen
            left: "50%", //left edge of alert at half the viewport width
            transform: "translateX(-50%)", // moves alert to the left at half the width of the alert box
            width: "auto", // adjust width based on content
            zIndex: 9999 // alert appears above other content
          }}
        >
          Removed Recipe
        </Alert>
      )}
      <Wallpaper>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="/recipe" element={<RecipeApp favorites={favorites} makeRecipe={makeRecipe}/>}>
          <Route path="aboutRecipe" element={<AboutRecipe/>}/>
          <Route
            path="homeRecipe"
            element={
              <HomeRecipe
                addFavorite={addFavorite}
                foodData={foodData}
                setFoodData={setFoodData}
                addMakeRecipe={addMakeRecipe}
                favorites={favorites}
                recipeData={recipeData}
                setRecipeData={setRecipeData}
              />
            }
          />
          <Route path="favorites" element={
            <Favorites
              favorites={favorites}
              addFavorite={addFavorite}
              addMakeRecipe={addMakeRecipe}/>
              }
            />
          <Route path="make" element={
            <MakeRecipe
              makeRecipe={makeRecipe}
              addGrocery={addGrocery}
              groceryList={groceryList}
              filteredRecipe={filteredRecipe}
              setFilteredRecipe={setFilteredRecipe}
              setNotes={setNotes}
              notes={notes}
              notesList={notesList}
              setNotesList={setNotesList}
              addMakeRecipe={addMakeRecipe}
            />
          }/>
        </Route>

        <Route path="/hostel" element={<Hostel/>}/>
        <Route path="/todo" element={<ToDoList/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/currency" element={<CurrencyTwo/>}/>
        <Route path="/countdown" element={<Countdown/>}/>
        <Route path="/counter" element={<Counter/>}/>

      </Routes>
      </Wallpaper>
    </Container>
  );
}

export default App;