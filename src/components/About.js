import {Grid, Container, Typography} from '@mui/material';

export function About() {
    return (
        <Container>
            <Grid>
                <Typography
                    variant="h4"
                    marginTop={7}
                    marginBottom={3}
                    textAlign={"center"}
                >
                    Welcome to my portfolio
                </Typography>
                <Grid marginBottom={3}>
                    <Typography
                        variant="body"
                    >
                        My name is Vimin Nanavati and I am a self-taught developer
                        with experience in HTML, CSS, JavaScript, jQuery, React, and Material UI.
                        Over the past year I've immersed myself in building projects that
                        have honed my skills and have deepened my understanding of web development.
                    </Typography>
                </Grid>
                <Typography
                    variant="h5"
                    marginBottom={1}
                >
                    Projects
                </Typography>
                <Grid marginBottom={1}>
                    <Typography variant="body">
                       My first project was building a simple counter app.
                       Through this app I learned the basics of React and the useState hook.
                    </Typography>
                </Grid>
                <Grid marginBottom={1}>
                    <Typography variant="body">
                       I expanded my understanding of useState and began exploring
                       error handling through a To Do List app which allows the user
                       to add a task and delete as needed.
                    </Typography>
                </Grid>
                <Grid marginBottom={1}>
                    <Typography variant="body">
                      Building a Countdown app introduced me to useEffect, where I
                      learned regex for error handling.
                    </Typography>
                </Grid>
                <Grid marginBottom={1}>
                    <Typography variant="body">
                      I learned to work with APIs and useEffect through
                      my Currency Converter app.
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="body">
                       I further practiced API integration in React by building a weather application
                       that displays live weather data.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
)
}