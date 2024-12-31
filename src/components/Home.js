import Grid from '@mui/material/Grid2';
import {Container, Box} from '@mui/material';
import BACKGROUND from "../images/background.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export function Home() {
    return (
        <Container maxWidth={"false"} disableGutters>
            <Grid>
                <Box
                    sx={{
                        backgroundImage: `url(${BACKGROUND})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column'

                    }}
                >
                    <Grid
                        container
                        alignItems={"center"}
                        justifyContent={"center"}
                        sx={{ flex: 1 }}
                    >
                    </Grid>

                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        sx={{ marginBottom: '20px', gap: 4 }}

                    >

                        <Grid
                            component="a"
                            href="mailto:vimin.nanavati@gmail.com"
                        >
                            <EmailIcon
                                sx={{
                                    fontSize: 70,
                                    color: '#00FFFF',
                                    filter: 'drop-shadow(0 0 10px #00FFFF) drop-shadow(0 0 20px #00FFFF)',
                                    '&:hover': {
                                        filter: 'drop-shadow(0 0 20px #00FFFF) drop-shadow(0 0 30px #00FFFF)',
                                    }
                                }}
                            />
                        </Grid>
                        <Grid
                            component="a"
                            href="https://github.com/vknanavati"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon
                                sx={{
                                    fontSize: 70,
                                    color: '#00FFFF',
                                    filter: 'drop-shadow(0 0 10px #00FFFF) drop-shadow(0 0 20px #00FFFF)',
                                    '&:hover': {
                                        filter: 'drop-shadow(0 0 20px #00FFFF) drop-shadow(0 0 30px #00FFFF)',
                                    }
                                }}
                            />
                        </Grid>

                        <Grid
                            component="a"
                            href="https://www.linkedin.com/in/vimin-nanavati-3510555b/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon
                                sx={{
                                    fontSize: 70,
                                    color: '#00FFFF',
                                    filter: 'drop-shadow(0 0 10px #00FFFF) drop-shadow(0 0 20px #00FFFF)',
                                    '&:hover': {
                                        filter: 'drop-shadow(0 0 20px #00FFFF) drop-shadow(0 0 30px #00FFFF)',
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>

                </Box>
            </Grid>

    </Container>
)
}