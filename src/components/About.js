import {Container, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import "../App.css"

export function About() {
    return (
        <Container sx={{paddingBottom: 20}}>
            <Grid>
                <Typography
                    marginTop={18}
                    marginBottom={3}
                    textAlign={"center"}
                    sx={{
                        textShadow: '0 0 20px #00FFFF, 0 0 20px #00FFFF, 0 0 10px #00FFFF',
                        fontFamily: "'Tilt Neon', sans-serif",
                        fontSize: 70,
                        color: '#AEFFFF',
                        fontWeight: 800
                    }}
                >
                    About Me
                </Typography>
                <Grid
                    sx={{
                        background: "linear-gradient(145deg, #140A26F2, #580F58E6)",
                        padding: 4,
                        borderRadius: 7,
                        boxShadow: 6
                    }}
                >
                    <Grid>
                        <Typography
                            variant="body"
                            fontSize={30}
                            color="#80DEEA"
                            sx={{fontFamily: "'Tilt Neon', sans-serif"}}
                        >
                            My name is Vimin Nanavati and I am a self-taught developer
                            with experience in HTML, CSS, JavaScript, jQuery, React, and Material UI.
                            Over the past two years I've immersed myself in building projects that
                            have honed my skills and deepened my understanding of web development.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    marginBottom={2}
                    marginTop={3}
                    sx={{
                        background: "linear-gradient(145deg, #140A26F2, #580F58E6)",
                        fontFamily: "'Tilt Neon', sans-serif",
                        color: "#80DEEA",
                        padding: 3,
                        borderRadius: 7,
                        fontSize: 30,
                        boxShadow: 6,
                    }}
                >
                    <Grid marginBottom={1}>
                        <Typography variant="body">
                            One of my key projects is a Recipe Search application which is a culmination of the skills I have attained.
                            In this application I have applied the concepts of React Router, pagination, component organization, state management, and side effects.
                        </Typography>
                    </Grid>
                    <Grid marginBottom={1}>
                        <Typography variant="body">
                        When I started my journey learning React, I built small projects like a counter app, which helped me understand the useState hook.
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
                    <Grid marginBottom={1}>
                        <Typography variant="body">
                        Throughout each project, I used Material UI to style the user interfaces, and I continually focused on building clean, reusable components.
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="body">
                        My goal is to continue improving as a developer and contribute to creating well-designed web applications.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
)
}