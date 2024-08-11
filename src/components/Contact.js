import {Box, Container, Grid, Typography} from '@mui/material'

export function Contact() {
    return (
    <Container>
        <Typography
            variant="h4"
            textAlign={"center"}
            marginBottom={7}
            marginTop={8}
            color={"#666666"}
            fontWeight={400}
            fontSize={60}
        >
            Get in touch with me!
        </Typography>
        <Grid
            sx={{
                backgroundColor: "#E6d7FF",
                padding: 5,
                borderRadius: 7,
                fontSize: 27,
                boxShadow: 4,
                width: "60%",
                mx: "auto"

            }}
        >
            <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
                marginBottom={3}
            >
                <Grid
                    component="a"
                    href="mailto:vimin.nanavati@gmail.com"
                >
                    <Box
                        sx={{
                            width: 70,
                            height: 70,
                            transition: "transform 0.2s ease-in-out",
                            "&:hover": {
                                transform: "scale(1.10)",
                                boxShadow: "-5px -5px 40px #A44CD3",
                                borderRadius: "50%"
                            },
                        }}
                        component="img"
                        alt="email-logo"
                        src={`${process.env.PUBLIC_URL}/icons/email-logo.png`}
                    >
                    </Box>
                </Grid>
                <Grid>
                    <Typography
                        component="a"
                        href="mailto:vimin.nanavati@gmail.com"
                        sx={{
                            fontSize: 25,
                            marginLeft: 2,
                            color: 'blue',
                            '&:hover': {
                                color: 'purple',
                            },
                            '&:active': {
                                color: 'pink',
                            },
                        }}
                    >
                        vimin.nanavati@gmail.com
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
                marginBottom={4}
            >
                <Grid
                    component="a"
                    href="https://github.com/vknanavati"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box
                        sx={{
                            width: 70,
                            height: 70,
                            transition: "transform 0.2s ease-in-out",
                            "&:hover": {
                                transform: "scale(1.10)",
                                boxShadow: "-5px -5px 40px #A44CD3",
                                borderRadius: "50%"
                            },
                        }}
                        component="img"
                        alt="github-logo"
                        src={`${process.env.PUBLIC_URL}/icons/github-logo.png`}
                    >
                    </Box>
                </Grid>
                <Grid>
                    <Typography
                        component="a"
                        href="https://github.com/vknanavati"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            marginLeft: 2,
                            fontSize: 25,
                            color: 'blue',
                            '&:hover': {
                                color: 'purple',
                            },
                            '&:active': {
                                color: 'pink',
                            },
                        }}
                    >
                        Github
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid
                    component="a"
                    href="https://www.linkedin.com/in/vimin-nanavati-3510555b/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box
                        sx={{
                            width: 70,
                            transition: "transform 0.2s ease-in-out",
                            "&:hover": {
                                transform: "scale(1.10)",
                                boxShadow: "-5px -5px 40px #A44CD3",
                                borderRadius: 3
                            },
                        }}
                        component="img"
                        alt="linkedin-logo"
                        src={`${process.env.PUBLIC_URL}/icons/linkedin-logo.png`}
                    >
                    </Box>
                </Grid>
                <Grid>
                    <Typography
                        component="a"
                        href="https://www.linkedin.com/in/vimin-nanavati-3510555b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            marginLeft: 2,
                            fontSize: 25,
                            color: 'blue',
                            '&:hover': {
                                color: 'purple',
                            },
                            '&:active': {
                                color: 'pink',
                            },
                        }}
                    >
                        LinkedIn
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Container>
)
}