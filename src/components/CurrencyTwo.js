import {useState} from 'react';
import {TextField, Grid, Container, Typography, FormControl, InputLabel, Select, MenuItem, Button} from '@mui/material';


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
                    variant="h4"
                    marginTop={7}
                    color={"#00CCCC"}
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
                                    width: 160,
                                    "& .MuiInputBase-root":{
                                      height: 50
                                    },
                                    input: {
                                      textAlign: "center",
                                      fontSize: 30
                                    },
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                      borderColor: "#00CCCC"
                                    }
                                  }}
                                value={amount}
                                type="text"
                                onChange={e=>setAmount(e.target.value)}

                            />
                        </Grid>
                        <Grid
                            container
                            justifyContent={"center"}
                        >
                            <Grid margin={3}>
                                <FormControl sx={{width: 120}}>
                                    <InputLabel
                                          sx={{
                                            '&.MuiInputLabel-shrink':{
                                              color:"#00CCCC"
                                            },
                                            fontSize: 25
                                          }}
                                    >
                                        From
                                    </InputLabel>
                                    <Select
                                        sx={{
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                            borderColor: "#00CCCC"
                                        },
                                        fontSize: 25
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
                            <Grid margin={3}>
                                <FormControl sx={{width: 120}}>
                                    <InputLabel
                                        sx={{
                                            '&.MuiInputLabel-shrink':{
                                            color:"#00CCCC"
                                            },
                                            fontSize: 25
                                        }}
                                    >
                                        To
                                    </InputLabel>
                                    <Select
                                        sx={{
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                            borderColor: "#00CCCC"
                                        },
                                        fontSize: 25
                                        }}
                                        label="To"
                                        onChange={e=>setTo(e.target.value)}
                                    >
                                        {currency_codes.map((currency_code, i) =>{
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
                            backgroundColor: "#00CCCC",
                            "&:hover": {
                                backgroundColor: "#00CCCC",
                            },
                            fontWeight: 700,
                            fontSize: 25
                            }}
                            variant="contained"
                            type="submit"

                        >
                            Submit
                        </Button>
                    </Grid>
                </form>
                {conversion && <Typography marginTop={5} fontSize={30}>{conversion.toFixed(2)} {to}</Typography>}
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