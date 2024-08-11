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
                backgroundColor: "#e6d7ff",
                margin: 8,
                padding: 4,
                borderRadius: 7,
                fontSize: 27,
                boxShadow: 4
            }}
        >
            <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid
                    component="a"
                    href="mailto:vimin.nanavati@gmail.com"
                >
                    <Box
                        sx={{maxWidth: 70}}
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
                            marginLeft: 1,
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
            >
                <Grid
                    component="a"
                    href="https://github.com/vknanavati"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box
                        sx={{maxWidth: 80}}
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
                            marginLeft: 1,
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
                        sx={{maxWidth: 80}}
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
                            marginLeft: 1,
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