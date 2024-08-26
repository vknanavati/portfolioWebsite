import {TextField, Grid, Container, Typography, FormControl, InputLabel, Select, MenuItem} from '@mui/material';

export function CurrencyTwo() {

    const apikey = 'fca_live_3ewfSqf1Y12DSCnmjCbDsMNMOkCR46iDztjF1E1c'
    const base_currency = 'USD'
    const currency = 'CAD'

    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apikey}&base_currency=${base_currency}&currencies=${currency}`, {
        headers: {
            "apikey": "fca_live_3ewfSqf1Y12DSCnmjCbDsMNMOkCR46iDztjF1E1c"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
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
                <form>
                    <Grid>
                        <Grid
                            marginTop={5}
                            marginBottom={5}
                        >
                            <TextField>
                            </TextField>
                        </Grid>
                        <Grid
                            container
                            justifyContent={"center"}
                        >
                            <Grid>
                                <FormControl>
                                    <InputLabel>
                                        From
                                    </InputLabel>
                                    <Select
                                        label="From"
                                    >
                                        {currency_codes.map((currency_code, i)=> {
                                            return <MenuItem key={i} value={currency_code}>{currency_code}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid>
                                <FormControl>
                                    <InputLabel>
                                        To
                                    </InputLabel>
                                    <Select
                                        label="To"
                                    >
                                        {currency_codes.map((currency_code, i) =>{
                                            return <MenuItem key={i} value={currency_code}>{currency_code}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
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