import { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

console.log(process.env)

export function Weather() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");

    const handleCity = e => {
      setCity(e.target.value)
    }

    const handleClick = (event) => {
      event.preventDefault()
      console.log("Searching city: ", city, process.env.REACT_APP_API_KEY)

      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setWeather(data)
        })
    }
    return (

      <Container>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
        <Typography
          variant="h4"
          sx={{marginTop: 15, marginBottom: 4, color: "#953ef7"}}
        >
          Current Weather
        </Typography>
        <form>
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            sx={{marginTop: 1}}
          >
            <Grid item>
              <TextField
                sx={{
                  width: 250,
                  "& .MuiInputBase-root":{
                    height: 50
                  }
                }}
                id="city"
                type="text"
                placeholder="enter city"
                value={city}
                onChange={handleCity}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{backgroundColor: "#953ef7",
                "&:hover": {
                  backgroundColor: "#953ef7",
                }
                }}
                onClick={e => handleClick(e)}
              >Search
              </Button>
            </Grid>
          </Grid>
        </form>
        {weather && (
        <Box
          textAlign={"center"}
          padding={2}
          height={250}
          width={250}
          borderRadius={5}
          marginTop={6}
          backgroundColor={"#d6b4fc"}
          fontSize={20}
          lineHeight={1}
          >
            <Typography sx={{ marginTop: 1, color:"#6B117D", fontSize: [25, "!important"]}}>{weather.name}</Typography>
            <img alt="weather-image" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <Typography sx={{ marginTop:2, color:"#6B117D", fontSize: [24, "!important"]}}>{weather.weather[0].description}</Typography>
            <Typography sx={{ marginTop: 1, color:"#6B117D", fontSize: [24, "!important"]}}>{weather.main.temp.toFixed(1)} °F</Typography>
        </Box>
        )}
      </Grid>
  </Container>
)
}