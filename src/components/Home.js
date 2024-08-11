import {Grid, Container, Typography, Box} from '@mui/material';

export function Home() {
    return (
        <Container maxWidth={"false"} disableGutters>
            <Grid>
                <Typography
                    variant="h4"
                    marginTop={10}
                    marginBottom={10}
                    textAlign={"center"}
                    color={"#666666"}
                    fontWeight={700}
                    fontSize={60}
                    letterSpacing={"0.05rem"}
                >
                    Welcome to my Portfolio
                </Typography>
                <Box
                    sx={{
                        display:"flex",
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                        width: "100%"
                    }}
                >
                    <Grid
                        container
                        justifyContent={"space-around"}
                        alignItems={"center"}
                    >
                        <Grid
                            // container
                            // justifyContent={"center"}
                            // alignItems={"center"}
                            sx={{
                                flexWrap: "nowrap",
                                marginTop: 5,
                                marginBottom: 10
                             }}
                        >
                            <Box
                                component="a"
                                href="https://vknanavati.github.io/portfolioWebsite/#/todo"
                            >
                                <Grid
                                    component="img"
                                    alt="to-do-list-image"
                                    src={`${process.env.PUBLIC_URL}/icons/todolist.png`}
                                    sx={{
                                        maxWidth: 700,
                                        marginRight: 30,
                                        transition: "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.10)",
                                            boxShadow: 5,
                                            borderRadius: 3
                                        },
                                    }}
                                />
                            </Box>
                            <Box
                                component="a"
                                href="https://vknanavati.github.io/portfolioWebsite/#/weather"
                            >
                                <Grid
                                    component="img"
                                    alt="weather-image"
                                    src={`${process.env.PUBLIC_URL}/icons/weather.png`}
                                    sx={{
                                        maxWidth: 300,
                                        transition: "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.10)",
                                            boxShadow: 5,
                                            borderRadius: 3
                                        },
                                    }}
                                />
                            </Box>
                        </Grid>
                    <Grid>
                        <Box
                            component="a"
                            href="https://vknanavati.github.io/portfolioWebsite/#/countdown"
                        >
                            <Grid
                                component="img"
                                alt="countdown-image"
                                src={`${process.env.PUBLIC_URL}/icons/countdown.png`}
                                sx={{
                                    maxWidth: 700,
                                    marginRight: 10,
                                    transition: "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.10)",
                                            boxShadow: 5,
                                            borderRadius: 3
                                        },
                                }}
                            />
                        </Box>
                        <Box
                            component="a"
                            href="https://vknanavati.github.io/portfolioWebsite/#/counter"
                        >
                            <Grid
                                component="img"
                                alt="counter-image"
                                src={`${process.env.PUBLIC_URL}/icons/counter.png`}
                                sx={{
                                    maxWidth: 500,
                                    transition: "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.10)",
                                            boxShadow: 5,
                                            borderRadius: 3
                                        },
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Container>
)
}