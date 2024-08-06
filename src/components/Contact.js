import {Box, Container, Grid, Typography} from '@mui/material'

export function Contact() {
    return (
    <Container>
        <Typography
            variant="h3"
            textAlign={"center"}
            marginBottom={7}
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
                        src="/icons/email-logo.png"
                    >
                    </Box>
                </Grid>
                <Grid>
                    <Box
                        sx={{marginLeft: 1}}
                        component="a"
                        href="mailto:vimin.nanavati@gmail.com"
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
                        src="/icons/github-logo.png"
                    >
                    </Box>
                </Grid>
                <Grid>
                    <Box
                        component="a"
                        href="https://github.com/vknanavati"
                        target="_blank"
                        rel="noopener noreferrer"
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
                        src="/icons/linkedin-logo.png"
                    >
                    </Box>
                </Grid>
                <Grid>
                    <Box
                        component="a"
                        href="https://www.linkedin.com/in/vimin-nanavati-3510555b/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Container>
)
}