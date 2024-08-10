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
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Grid
                            container
                            justifyContent={"center"}
                            alignItems={"center"}
                            sx={{flexWrap: "nowrap"}}
                        >
                            <Box
                                component="a"
                                href="https://vknanavati.github.io/portfolioWebsite/todo"
                                // target="_blank"
                                // rel="noopener noreferrer"
                            >
                            <Grid
                                component="img"
                                alt="to-do-list-image"
                                src={`${process.env.PUBLIC_URL}/icons/todolist.png`}
                                sx={{maxWidth: 800,
                                    marginRight: 12
                                }}
                            />
                            </Box>
                            <Grid
                                component="img"
                                alt="weather-image"
                                src={`${process.env.PUBLIC_URL}/icons/weather.png`}
                                sx={{maxWidth: 600}}
                            />
                        </Grid>
                    <Grid>
                        <Grid
                            component="img"
                            alt="countdown-image"
                            src={`${process.env.PUBLIC_URL}/icons/countdown.png`}
                            sx={{maxWidth: 700}}
                        />
                        <Grid
                            component="img"
                            alt="counter-image"
                            src={`${process.env.PUBLIC_URL}/icons/counter.png`}
                            sx={{maxWidth: 600}}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Container>
)
}