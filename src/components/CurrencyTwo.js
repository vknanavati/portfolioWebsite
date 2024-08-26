import {useState} from 'react';
import {TextField, Grid, Container, Typography, FormControl, InputLabel, Select, MenuItem, Button} from '@mui/material';


export function CurrencyTwo() {
    console.log(process.env)

    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("")

    console.log("From: ", from)
    console.log("To:", to)

    const handleSubmit = e => {
        e.preventDefault();

        console.log("Searching currency exchange: ", to, from, process.env.REACT_APP_CURRENCY_TWO_KEY)

        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.REACT_APP_CURRENCY_TWO_KEY}&base_currency=${from}&currencies=${to}`, {
        })
        .then(response => response.json())
        .then(data => console.log("My currency data: ", data))
        .catch(error => console.error('Error:', error))
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
                    marginTop={7}
                >
                    Currency Converter
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid>
                        <Grid
                            marginTop={5}
                            marginBottom={5}
                        >
                            <TextField
                                value={amount}
                                type="text"
                                onChange={e=>setAmount(e.target.value)}

                            />
                        </Grid>
                        <Grid
                            container
                            justifyContent={"center"}
                        >
                            <Grid margin={2}>
                                <FormControl>
                                    <InputLabel>
                                        From
                                    </InputLabel>
                                    <Select
                                        label="From"
                                        onChange={e=>setFrom(e.target.value)}
                                    >
                                        {currency_codes.map((currency_code, i)=> {
                                            return <MenuItem key={i} value={currency_code}>{currency_code}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid margin={2}>
                                <FormControl>
                                    <InputLabel>
                                        To
                                    </InputLabel>
                                    <Select
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
                            variant="contained"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Grid>
                </form>
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