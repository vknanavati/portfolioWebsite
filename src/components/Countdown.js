import {useState, useEffect} from 'react';
import {Container, Typography, Button, TextField, useTheme, useMediaQuery} from '@mui/material';
import Grid from '@mui/material/Grid2';

export function Countdown() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [input, setInput] = useState("");
    const [date, setDate] = useState(0);
    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("")
    const [countdown, setCountdown] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    /*If date is true then countdown will start.
    setInterval calls a function at specified intervals.
    In this case calculateTime gets called every 1000 milliseconds
    to update the countdown. */
    useEffect(()=>{
        if (date) {
        const interval = setInterval(()=>{
            calculateTime(date);
        }, 1000);
        return () => clearInterval(interval)
        }
    },[date] )

    const handleSubmit = (e) => {
        e.preventDefault();

        const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

        if (!dateRegex.test(input)) {
        setErrorMessage("Please use mm/dd/yyyy date format");
        setCountdown(false);
        } else {
            setErrorMessage("");

            setDate(input);
            setCountdown(true);
            calculateTime(input);

            console.log("Input: ", input);
            console.log("Date: ", date);
            console.log("Countdown: ", countdown);
        }
    }

    const calculateTime = (userDate) => {
        /*parse parses the date string and returns the
        number of milliseconds. */
        const timeMS = Date.parse(userDate) -
        Date.parse(new Date());

        setDays(Math.floor(timeMS/(1000*60*60*24)));
        setHours(Math.floor((timeMS/(1000*60*60))%24));
        setMinutes(Math.floor((timeMS/1000/60)%60));
        setSeconds(Math.floor((timeMS/1000)%60));
    }
    return(
        <Container>
            <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
            >
            <Typography
                align="center"
                marginTop={30}
                marginBottom={5}
                sx={{
                    textShadow: "0 0 20px #00FFFF, 0 0 20px #00FFFF, 0 0 10px #00FFFF",
                    fontFamily: "'Tilt Neon', sans-serif",
                    fontSize: isMobile ? 45: 70,
                    color: "#AEFFFF",
                    fontWeight: 800
                }}
            >
                Countdown Clock
            </Typography>
            <form>
                <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"center"}
                    marginTop={5}
                >
                    <Grid item>
                        <TextField
                            sx={{
                                width: isMobile ? '90%' : 360,
                                "& .MuiInputBase-root": {
                                    height: isMobile ? 50 : 70,
                                },
                                input: {
                                    textAlign: isMobile ? "center" : "",
                                    fontSize: 40,
                                    color: "#FF00FF"
                                },
                                fieldset: {
                                    borderColor: "#FF00FF"
                                },
                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#FF00FF"
                                },
                                '& .MuiOutlinedInput-root:hover fieldset': {
                                    borderColor: "#FF00FF"
                                },
                                "& input": {
                                    fontFamily: "Orbitron, sans-serif"
                                },
                            }}
                            value={input}
                            placeholder="enter date"
                            onChange={e => setInput(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                margin: 2,
                                backgroundColor: "#FF00FF",
                                fontSize: isMobile ? 20 : 25,
                                fontWeight: 700,
                                color: "#FFF",
                                fontFamily: "Orbitron, sans-serif",
                                padding: isMobile ? "8px 20px" : "10px 25px",
                                borderRadius: "4px",
                                textTransform: "none",
                                boxShadow: "0 0 10px #FF00FF, 0 0 20px #FF00FF",
                                '&:hover': {
                                  backgroundColor: "#FF33FF",
                                  boxShadow: "0 0 15px #FF00FF, 0 0 25px #FF00FF, 0 0 35px #FF00FF",
                                }
                            }}
                            onClick={e => handleSubmit(e)}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
                <Grid>
                    {errorMessage && <Typography color={"#F61297"} sx={{fontSize: isMobile ? 20 : 25, margin: 1}}>{errorMessage} </Typography>}
                </Grid>
                {countdown && (
                <Grid
                    container
                    sx={{ marginTop: isMobile ? 2 : 6}}
                    justifyContent={"center"}
                >
                    {<Typography  margin={1} sx={{color: "#FF00FF", fontFamily: "Orbitron, sans-serif", fontSize: isMobile ? 30 : 40}}>{days !=="" ? `${days} days` : ""} </Typography>}
                    {<Typography margin={1} sx={{color: "#FF00FF", fontFamily: "Orbitron, sans-serif", fontSize: isMobile ? 30 : 40}}>{hours !=="" ? `${hours} hours` : ""} </Typography>}
                    {<Typography  margin={1} sx={{color: "#FF00FF", fontFamily: "Orbitron, sans-serif", fontSize: isMobile ? 30 : 40}}>{minutes !=="" ? `${minutes} minutes` : ""} </Typography>}
                    {<Typography  margin={1} sx={{color: "#FF00FF", fontFamily: "Orbitron, sans-serif", fontSize: isMobile ? 30 : 40}}>{seconds !=="" ? `${seconds} seconds`: ""} </Typography>}
                </Grid>
                )}
          </form>
        </Grid>
       </Container>
    )
}