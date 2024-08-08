import {Box, Container, Grid, Typography} from '@mui/material'

export function Contact() {
    return (
    <Container>
        <Typography
            variant="h4"
            textAlign={"center"}
            marginBottom={7}
            marginTop={7}
        >
            Get in touch with me!
        </Typography>
        <Grid>
            <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid>
                    <Box
                        sx={{maxWidth: 70}}
                        component="img"
                        alt="email-logo"
                        src={`${process.env.PUBLIC_URL}/icons/email-logo.png`}
                    >
                    </Box>
                </Grid>
                <Grid>
                    <Box
                        component="a"
                        href="mailto:vimin.nanavati@gmail.com"
                        sx={{
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
                    </Box>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid>
                    <Box
                        sx={{maxWidth: 80}}
                        component="img"
                        alt="github-logo"
                        src={`${process.env.PUBLIC_URL}/icons/github-logo.png`}
                    >
                    </Box>
                </Grid>
                <Grid>
                    <Box
                        component="a"
                        href="https://github.com/vknanavati"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
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
                        Github
                    </Box>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid>
                    <Box
                        sx={{maxWidth: 80}}
                        component="img"
                        alt="linkedin-logo"
                        src={`${process.env.PUBLIC_URL}/icons/linkedin-logo.png`}
                    >
                    </Box>
                </Grid>
                <Grid>
                    <Box
                        component="a"
                        href="https://www.linkedin.com/in/vimin-nanavati-3510555b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
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
                        LinkedIn
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Container>
)
}