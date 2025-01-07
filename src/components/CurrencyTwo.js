import {useState} from 'react';
import {TextField, Container, Typography, FormControl, InputLabel, Select, MenuItem, Button} from '@mui/material';
import Grid from '@mui/material/Grid2';

export function CurrencyTwo() {
    console.log(process.env)

    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [conversion, setConversion] = useState("")

    console.log("From: ", from)
    console.log("To:", to)

    const handleSubmit = e => {
        e.preventDefault();

        console.log("Searching currency exchange: ", to, from, process.env.REACT_APP_CURRENCY_TWO_KEY)

        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.REACT_APP_CURRENCY_TWO_KEY}&base_currency=${from}&currencies=${to}`, {
        })
        .then(response => response.json())
        .then(data =>{
            console.log("My currency data: ", data);
            const conversionData = data.data;
            calculateAmount(conversionData)
        })
        .catch(error => console.error('Error:', error))
    }

    const calculateAmount = (conversionData) => {
        console.log("value: ", Object.values(conversionData)[0])
        console.log(typeof Object.values(conversionData)[0])
        console.log("key: ", Object.keys(conversionData)[0])
        console.log(typeof Object.keys(conversionData)[0])
        console.log("amount: ", Number(amount))
        console.log(typeof Number(amount))

        const endValue = Number(amount) * Object.values(conversionData)[0]
        setConversion(endValue)
        console.log("conversion: ", endValue)
    }

    return (
        <Container>
            <Grid
                container
                justifyContent={"center"}
                direction={"column"}
                alignItems={"center"}
            >
                <Typography
                    marginTop={30}
                    sx={{
                        textShadow: '0 0 20px #00FFFF, 0 0 20px #00FFFF, 0 0 10px #00FFFF',
                        fontFamily: "'Tilt Neon', sans-serif",
                        fontSize: 70,
                        color: '#AEFFFF',
                        fontWeight: 800,
                    }}
                >
                    Currency Converter
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid>
                        <Grid
                            container
                            justifyContent={"center"}
                            marginTop={5}
                            marginBottom={5}
                        >
                            <TextField
                                  sx={{
                                    width: 360,
                                    fieldset: {
                                        borderColor: "#FF00FF"
                                    },
                                    "& input": {
                                        fontFamily: "Orbitron, sans-serif"
                                    },
                                    "& .MuiInputBase-root": {
                                      height: 70
                                    },
                                    input: {
                                      textAlign: "center",
                                      fontSize: 40,
                                      color: "#FF00FF"
                                    },
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                      borderColor: "#FF00FF"
                                    },
                                    '& .MuiOutlinedInput-root:hover fieldset': {
                                        borderColor: '#FF00FF',},
                                  }}
                                value={amount}
                                placeholder="amount"
                                type="text"
                                onChange={e=>setAmount(e.target.value)}
                            />
                        </Grid>
                        <Grid
                            container
                            justifyContent={"center"}
                        >
                            <Grid margin={7}>
                                <FormControl sx={{width: 120}}>
                                    <InputLabel
                                        sx={{
                                            color: "#FF00FF",
                                            borderColor: "#FF00FF",
                                            '&.MuiInputLabel-shrink':{
                                                color:"#FF00FF"
                                            },
                                            fontSize: 25,
                                            fontFamily: "Orbitron, sans-serif"
                                        }}
                                    >
                                        From
                                    </InputLabel>
                                    <Select
                                        sx={{
                                            '.MuiOutlinedInput-notchedOutline': {
                                                borderColor: "#FF00FF",
                                                '& legend': {
                                                    width: "70px"
                                                },
                                            },
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                                borderColor: "#FF00FF"
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: "#FF00FF",
                                            },
                                            '.MuiSvgIcon-root ': {
                                                fill: "#FF00FF",
                                            },
                                            fontSize: 25,
                                            color: "#FF00FF",
                                            width: 150,
                                            paddingTop: "3px"
                                        }}
                                        label="From"
                                        onChange={e=>setFrom(e.target.value)}
                                    >
                                        {currency_codes.map((currency_code, i)=> {
                                            return <MenuItem key={i} value={currency_code}>{currency_code}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid margin={7}>
                                <FormControl sx={{width: 120}}>
                                    <InputLabel
                                        sx={{
                                            color: "#FF00FF",
                                            borderColor: "#FF00FF",
                                            '&.MuiInputLabel-shrink':{
                                                color:"#FF00FF"
                                            },
                                            fontSize: 25,
                                            fontFamily: "Orbitron, sans-serif"
                                        }}
                                    >
                                        To
                                    </InputLabel>
                                    <Select
                                        sx={{
                                            '.MuiOutlinedInput-notchedOutline': {
                                                borderColor: "#FF00FF",
                                                '& legend': {
                                                    width: "70px"
                                                },
                                            },

                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                                borderColor: "#FF00FF"
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: "#FF00FF",
                                            },
                                            '.MuiSvgIcon-root ': {
                                                fill: "#FF00FF",
                                            },
                                            fontSize: 25,
                                            color: "#FF00FF",
                                            width: 130,
                                            paddingTop: "3px"
                                        }}
                                        label="To"
                                        onChange={e=>setTo(e.target.value)}
                                    >
                                        {currency_codes.map((currency_code, i) => {
                                            return <MenuItem key={i} value={currency_code}>{currency_code}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        justifyContent={"center"}
                    >
                        <Button
                            sx={{
                                margin: 2,
                                backgroundColor: "#FF00FF",
                                fontSize: 25,
                                fontWeight: 700,
                                color: "#FFF",
                                fontFamily: "Orbitron, sans-serif",
                                padding: "10px 25px",
                                borderRadius: "4px",
                                textTransform: "none",
                                boxShadow: "0 0 10px #FF00FF, 0 0 20px #FF00FF",
                                '&:hover': {
                                    backgroundColor: "#FF33FF",
                                    boxShadow: "0 0 15px #FF00FF, 0 0 25px #FF00FF, 0 0 35px #FF00FF",
                                }
                            }}
                            variant="contained"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Grid>
                </form>
                {conversion && <Typography sx={{color: "#FF00FF", fontFamily: "Orbitron, sans-serif"}} marginTop={8} fontSize={40}>{conversion.toFixed(2)} {to}</Typography>}
            </Grid>
        </Container>
    )
}

const currency_codes = [
    "EUR",
    "USD",
    "JPY",
    "BGN",
    "CZK",
    "DKK",
    "GBP",
    "HUF",
    "PLN",
    "RON",
    "SEK",
    "CHF",
    "ISK",
    "NOK",
    "HRK",
    "RUB",
    "TRY",
    "AUD",
    "BRL",
    "CAD",
    "CNY",
    "HKD",
    "IDR",
    "ILS",
    "INR",
    "KRW",
    "MXN",
    "MYR",
    "NZD",
    "PHP",
    "SGD",
    "THB",
    "ZAR"

 ]