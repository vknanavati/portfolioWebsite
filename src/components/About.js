import {Container, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import "../App.css"

export function About() {
    const descriptionStyles = {
        fontFamily: "'Tilt Neon', sans-serif",
        fontSize: {
            xs: "18px",
            sm: "24px",
            md: "30px"
        },
        color: "#80DEEA",
        lineHeight: 1.5
    }

    return (
        <Container
            sx={{
                paddingBottom: { xs: 10, md: 20 },
                paddingTop: { xs: "120px", sm: "150px", md: "100px" },
                minHeight: "100vh",
                position: "relative",
                zIndex: 1
            }}
        >
            <Grid
                container
                spacing={2}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                    position: "relative",
                    zIndex: 1
                }}
            >
                <Grid xs={12}>
                    <Typography
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            marginTop: {md: 8},
                            marginBottom: { xs: 2, sm: 3 },
                            textShadow: '0 0 20px #00FFFF, 0 0 20px #00FFFF, 0 0 10px #00FFFF',
                            fontFamily: "'Tilt Neon', sans-serif",
                            fontSize: {
                                xs: "40px",
                                sm: "56px",
                                md: "70px"
                            },
                            color: '#AEFFFF',
                            fontWeight: 800,
                            letterSpacing: { xs: 1, sm: 2}
                        }}
                    >
                        About Me
                    </Typography>
                </Grid>

                <Grid xs={12}>
                    <Grid
                        sx={{
                            background: "linear-gradient(145deg, #140A26F2, #580F58E6)",
                            padding: { xs: 2, sm: 3, md: 4 },
                            borderRadius: { xs: 4, sm: 5, md: 7 },
                            boxShadow: 6
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: "'Tilt Neon', sans-serif",
                                fontSize: {
                                    xs: "18px",
                                    sm: "24px",
                                    md: "30px"
                                },
                                color: "#80DEEA",
                                lineHeight: 1.5,
                                padding: { xs: 1, sm: 2 }
                            }}
                        >
                            My name is Vimin Nanavati and I am a self-taught developer
                            with experience in HTML, CSS, JavaScript, jQuery, React, and Material UI.
                            Over the past two years I've immersed myself in building projects that
                            have honed my skills and deepened my understanding of web development.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid xs={12}>
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
                        <Grid sx={{ marginBottom: { xs: 1.5, sm: 2 } }}>
                            <Typography variant="body1" sx={{ ...descriptionStyles }}>
                                One of my key projects is a Recipe Search application which is a culmination of the skills I have attained.
                                In this application I have applied the concepts of React Router, pagination, component organization, state management, and side effects.
                            </Typography>
                        </Grid>
                        <Grid sx={{ marginBottom: { xs: 1.5, sm: 2 } }}>
                            <Typography variant="body1" sx={{ ...descriptionStyles }}>
                            When I started my journey learning React, I built small projects like a counter app, which helped me understand the useState hook.
                            </Typography>
                        </Grid>
                        <Grid sx={{ marginBottom: { xs: 1.5, sm: 2 } }}>
                            <Typography variant="body1" sx={{ ...descriptionStyles }}>
                                Building a Countdown app introduced me to useEffect, where I
                                learned regex for error handling.
                            </Typography>
                        </Grid>
                        <Grid sx={{ marginBottom: { xs: 1.5, sm: 2 } }}>
                            <Typography variant="body1" sx={{ ...descriptionStyles }}>
                                I learned to work with APIs and useEffect through
                                my Currency Converter app.
                            </Typography>
                        </Grid>
                        <Grid sx={{ marginBottom: { xs: 1.5, sm: 2 } }}>
                            <Typography variant="body1" sx={{ ...descriptionStyles }}>
                            Throughout each project, I used Material UI to style the user interfaces, and I continually focused on building clean, reusable components.
                            </Typography>
                        </Grid>
                        <Grid sx={{ marginBottom: { xs: 1.5, sm: 2 } }}>
                            <Typography variant="body1" sx={{ ...descriptionStyles }}>
                            My goal is to continue improving as a developer and contribute to creating well-designed web applications.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
)
}