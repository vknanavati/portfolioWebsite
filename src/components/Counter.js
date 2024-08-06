import { useState } from 'react';
import {Container, Grid, Typography, Button} from '@mui/material';

export function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
    setCount(count + 1)
    }

    const handleSubtract = () => {
    setCount(count - 1)
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
                variant="h3"
                marginTop={10}
                color={"#FE019A"}
                >
                Counter App
                </Typography>
                <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                marginTop={6}
                >
                <Grid>
                    <Button
                    sx={{
                        marginRight: 3,
                        fontSize: 30,
                        padding: 0,
                        border: "2px #FE019A solid",
                        color: "#FE019A",
                        "&:hover": {
                        border: "2px #FE019A solid",
                        },
                        fontWeight: 700
                    }}
                    variant="outlined"
                    onClick={handleSubtract}
                    >
                    -
                    </Button>
                </Grid>
                <Grid>
                    <Typography
                    variant="body2"
                    fontSize={70}
                    fontWeight={200}
                    color={"#3C3E3C"}

                    >
                    {count}
                    </Typography>
                </Grid>
                <Grid>
                    <Button
                    sx={{
                        marginLeft: 3,
                        fontSize: 30,
                        padding: 0,
                        border: "2px #FE019A solid",
                        color: "#FE019A",
                        "&:hover": {
                        border: "2px #FE019A solid",
                        },
                        fontWeight: 700
                    }}
                    variant="outlined"
                    onClick={handleAdd}
                    >
                    +
                    </Button>
                </Grid>
                </Grid>
            </Grid>
        </Container>

    )
}