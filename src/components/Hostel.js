import { useState } from 'react';
import { Container, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, CircularProgress, Paper, useTheme, useMediaQuery} from '@mui/material';
import Grid from '@mui/material/Grid2';

export function Hostel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [country, setCountry] = useState("");
  const [continent, setContinent] = useState("");
  const [city, setCity] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [secondLoad, setSecondLoad] = useState(false);
  const [graph1, setGraph1] = useState("");
  const [graph2, setGraph2] = useState("");
  const [graph3, setGraph3] = useState("");
  const [graph4, setGraph4] = useState("");
  const [graph5, setGraph5] = useState("");
  const [graph6, setGraph6] = useState("");
  const [graph7, setGraph7] = useState("");
  const [graph8, setGraph8] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with country:", country);
    setLoading(true)
    setError("")
    // send the country name to the Flask backend
    try {
      const res = await fetch('https://hostel-app-31f2f9652ccd.herokuapp.com/get-country', {
        method: 'POST',
        //informs the server about the format of data being sent
        headers: {
          'Content-Type': 'application/json',
        },
        // actual data being sent to server
        // '{"country": "Canada"}' is the result of JSON.stringify
        // stringify converts the JavaScript object { country } into a JSON string. In this object, country is the key, and its value is whatever the user typed in the text field.
        body: JSON.stringify({ country }),
      });

      console.log("Response received:", res);

      if (!res.ok) { // Check if the response status code is not in the range 200-299
        const errorData = await res.json();
        setError(errorData.error || "An unknown error occurred.");
        setLoading(false)
        return;
      }

      // parses the JSON response from the server into a JS object
      const data = await res.json();
      console.log("Data parsed:", data);
      //  updates the response state with the city_list result from the server or a default message if no response is provided.
      setResponse(data.cities || "No response");
      setContinent(data.continent);
      setLoading(false)
    } catch (error) {
      setError("Error: Could not connect to server.");
      setLoading(false)
    }
  };

  const handleCityChoice = e => {
    const selectedCity = e.target.value
    setCity(selectedCity)
    console.log("city chosen: ", selectedCity)
    handleSelect(selectedCity)
    setSecondLoad(true)
  }
  const handleSelect = async (selectedCity) => {
    try {
        await fetch('https://hostel-app-31f2f9652ccd.herokuapp.com/get-user-city', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country, continent, city: selectedCity }),
      });

      const baseURL = 'https://hostel-app-31f2f9652ccd.herokuapp.com';
      setGraph1(`${baseURL}/static/graph1.png`);
      setGraph2(`${baseURL}/static/graph2.png`);
      setGraph3(`${baseURL}/static/graph3.png`);
      setGraph4(`${baseURL}/static/graph4.png`);
      setGraph5(`${baseURL}/static/graph5.png`);
      setGraph6(`${baseURL}/static/graph6.png`);
      setGraph7(`${baseURL}/static/graph7.png`);
      setGraph8(`${baseURL}/static/graph8.png`);
      setSecondLoad(false)
      console.log("graphs printed")
    } catch (error) {
      console.log(error)
      setError("Error: Could not connect to server.")
      setSecondLoad(false)
    }
  }

  return (
    <Container
      sx={{
        paddingBottom: 20,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 10,
        paddingRight: 10,
        maxWidth: "90vw",
      }}
      maxWidth={"false"}
    >
      <Grid>
        <Typography
          sx={{
            marginTop: 20,
            marginBottom: 5,
            // color: "#EF6AE8",
            textAlign: "center",
            textShadow: "0 0 20px #00FFFF, 0 0 20px #00FFFF, 0 0 10px #00FFFF",
            fontFamily: "'Tilt Neon', sans-serif",
            fontSize: isMobile ? '25px' : '50px',
            color: '#AEFFFF',
            fontWeight: 800,

          }}
        >
          Hostel Ratings Comparison
        </Typography>
        <Grid marginBottom={6}>
        <Paper
          elevation={5}
          sx={{
            paddingX: isMobile ? 3 : 10,
            paddingY: 5,
            maxWidth: isMobile ? "90%" : "70%",
            margin: "0 auto",
            background: "linear-gradient(145deg, #140A26F2, #580F58E6)",
            color: "#80DEEA",
            borderRadius: 7,
            boxShadow: 6,
            wordWrap: "break-word"
          }}
        >
          <Typography variant="body1" sx={{fontFamily: "'Tilt Neon', sans-serif", fontSize: isMobile ? 18 : 25, textAlign: "center"}}>
            Welcome to the Hostel Ratings Comparison. Here you will be able to see bar graphs depicting the top hostels in the city of your choice.
            The first graph will rate the top 10 hostels by average overall rating. The subsequent graphs rank each hostel by their rating in specific categories.
            The categories shown are Security, Location, Staff, Atmosphere, Cleanliness, Value, and Facilities.
            <br/>
            <br/>
          </Typography>
          <Typography sx={{fontFamily: "'Tilt Neon', sans-serif", fontSize: isMobile ? 25 : 30, textAlign: "center"}}>
            How to Use this App
          </Typography>
          <Typography variant="body1"  sx={{fontFamily: "'Tilt Neon', sans-serif", fontSize: isMobile ? 18 : 25, textAlign: "left", lineHeight: 2}}>
            <br/>
            1. Type the country of your choice into the input box and click 'submit'.<br/>
            2. Wait for a dropdown box to appear. This may take a few moments. <br/>
            Once the dropdown menu appears you will be able to select a city. <br/>
            3. Once you select a city, sit back and wait for the graphs to appear.
            <br/>
            <br/>
          </Typography>
          <Typography sx={{fontFamily: "'Tilt Neon', sans-serif", fontSize: isMobile ? 25 : 30, textAlign: "center"}}>
           How it Works
          </Typography>
          <Typography variant="body1" sx={{fontFamily: "'Tilt Neon', sans-serif", fontSize: isMobile ? 18 : 25, textAlign: isMobile ? "center" : "left"}}>
            <br/>
            The frontend portion of this application uses React which is a JavaScript library for building user interfaces(UI).
            When the user enters a country name in the input field of the form, the app uses Fetch API to send this country name to the backend.
            In this case the Fetch API makes a POST request from the React app to the Flask server (backend).
            The app then updates the user interface to display a dropdown menu of cities. This list of cities was received from the server.
            Once a city is selected, a second POST request is made to the server. This triggers the backend to scrape the Hostelworld website, process the data,
            and generate graphs. The graphs are displayed on the UI once the server processes the data.
            <br/>
            <br/>
            When the Flask server receives the country name, the Flask routes handle this request. It uses a function to determine the corresponding continent.
            This country name and continent name are then used by BeautifulSoup to access the Hostelworld website and parse the HTML content.
            This content includes the list of cities in the selected country and the hostel names and ratings.
            <br/>
            <br/>
            Once the data is scraped, Pandas, a data analysis library in Python, organizes the hostel names and ratings. This data is stored in a DataFrame which is then saves as a CSV file.
            <br/>
            <br/>
            Finally, Jupyter notebook is automatically run by Flask to generate the graphs that visualize the hostel ratings.
            Libraries like Seaborn and Matplotlib compare the ratings across the given categories (e.g., Security, Location, Cleanliness).
            The graphs are saved as png files which are then displayed on the frontend.
          </Typography>
        </Paper>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            sx={{marginBottom: 7}}
          >
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#EF6AE8"
                  },
                  input: {
                    fontSize: { xs: 18, sm: 20, md: 25 },
                    color: "black",
                    background: "white"
                  },
                  fieldset: { borderColor: "black" },
                  marginBottom: isMobile ? 2 : 0
                }}
                type="text"
                placeholder="Enter country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <Button
                type="submit"
                variant="contained"
                size="medium"
                sx={{
                  marginLeft: 2,
                  backgroundColor: "#EF6AE8",
                  "&:hover": {
                    backgroundColor: "#EF6AE8"
                  },
                  fontSize: { xs: 16, sm: 18, md: 20 },
                  fontWeight: 700,
                  paddingY: 2,
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>

          {loading &&
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              sx={{marginTop: 3}}
            >
              <CircularProgress size="3rem" sx={{color: "#EF6AE8" }}/>
            </Grid>
          }

          {error &&
            <Typography
              color={"red"}
              textAlign={"center"}
              fontSize={25}
              sx={{ marginTop: 2 }}
            >
              {error}
            </Typography>
          }

          {response && (
          <Grid
            container
            marginTop={5}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} sm={8} md={6}>
              <FormControl sx={{ background: "white", padding: 2, }}>
                <InputLabel
                  sx={{
                    '&.MuiInputLabel-shrink':{
                      color:"black"
                    },
                    fontSize: { xs: 15, sm: 25, md: 30 },
                    marginLeft: 1,

                    transform: isMobile ? "translate(25px, 5px)" : "",
                    paddingTop: isMobile ? "0" : "10px"
                  }}
                >
                  Choose City
                </InputLabel>
                <Select
                  sx={{
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                      borderColor: "#EF6AE8",
                    },
                    fontSize: { xs: 20, sm: 22, md: 25 },
                    width: 200

                  }}
                  label="Choose City"
                  value={city}
                  onChange={e=>handleCityChoice(e)}
                >
                  {response.map((choice, i)=>{
                    return <MenuItem key={i} value={choice}>{choice}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Grid>
            {secondLoad &&
              <Grid
                container
                justifyContent={"center"}
                paddingTop={5}
              >
                <CircularProgress size="3rem" sx={{color: "#EF6AE8" }}/>
              </Grid>
            }
            <Grid container justifyContent={"center"} marginTop={10}>
              {graph1 && <Grid sx={{mb:9}}><img src={graph1} alt="hostel-graph"/></Grid>}
              {graph2 && <Grid sx={{mb:9}}><img src={graph2} alt="hostel-graph"/></Grid>}
              {graph3 && <Grid sx={{mb:9}}><img src={graph3} alt="hostel-graph"/></Grid>}
              {graph4 && <Grid sx={{mb:9}}><img src={graph4} alt="hostel-graph"/></Grid>}
              {graph5 && <Grid sx={{mb:9}}><img src={graph5} alt="hostel-graph"/></Grid>}
              {graph6 && <Grid sx={{mb:9}}><img src={graph6} alt="hostel-graph"/></Grid>}
              {graph7 && <Grid sx={{mb:9}}><img src={graph7} alt="hostel-graph"/></Grid>}
              {graph8 && <Grid sx={{mb:9}}><img src={graph8} alt="hostel-graph"/></Grid>}
          </Grid>
        </Grid>
        )}
        </form>
      </Grid>
    </Container>
  );
}
