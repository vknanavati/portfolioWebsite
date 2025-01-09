import {Box} from '@mui/material';

export function Logo() {
    return (
        <Box
            sx={{

                width: { xs: "70%", sm: "70%", md: "70%"},
                margin: "0 auto",
                padding: { xs: 2, sm: 4, md: 6},
                color: "white",
                fontSize: {
                    xs: "40px",
                    sm: "64px",
                    md: "100px"
                },
                textAlign: "center",
                fontFamily: "'Tilt Neon', sans-serif",
                fontWeight: 700,
                letterSpacing: { xs: 1, sm: 2, md: 3 },
                lineHeight: 1.2,

                textShadow: `
                    0 0 5px #00FFFF,
                    0 0 10px #00FFFF,
                    0 0 20px #00FFFF,
                    0 0 40px #00FFFF,
                    0 0 80px #00FFFF
                `,
                animation: "glow 5s infinite",
                '@keyframes glow': {
                    '0%': {
                        textShadow: `
                            0 0 5px #00FFFF,
                            0 0 10px #00FFFF,
                            0 0 20px #00FFFF,
                            0 0 40px #00FFFF,
                            0 0 60px #00FFFF,
                           `,
                           transform: "scale(1)",
                    },
                    '50%': {
                        textShadow: `
                            0 0 10px #FF00FF,
                            0 0 20px #FF00FF,
                            0 0 40px #FF00FF,
                            0 0 80px #FF00FF,
                            0 0 100px #FF00FF
                        `,
                        transform: "scale(1.02)",
                    },
                    '100%': {
                        textShadow: `
                            0 0 5px #00FFFF,
                            0 0 10px #00FFFF,
                            0 0 20px #00FFFF,
                            0 0 40px #00FFFF,
                            0 0 60px #00FFFF
                        `,
                        transform: "scale(1)",
                    },
                },
                border: {
                    xs: "3px solid #FFF",
                    sm: "4px solid #FFF",
                    md: "5px solid #FFF"
                },
                // border: "2px solid #FF00FF",
                borderRadius: {
                    xs: 4,
                    sm: 6,
                    md: 8
                },
                boxShadow: `
                    0 0 4.2px #FFF,
                    0 0 4.2px #FFF,
                    0 0 32px #FF00FF,
                    0 0 20.8px #FF00FF,
                    0 0 44.8px #FF00FF,
                    inset 0 0 20.8px #FF00FF
                `,

                transition: "transform 0.3s ease-in-out",
                '&:hover': {
                    transform: "scale(1.02)",
                    boxShadow: `
                        0 0 8px #FFF,
                        0 0 40px #FF00FF,
                        0 0 25px #FF00FF,
                        0 0 55px #FF00FF,
                        inset 0 0 25px #FF00FF  `
                },

                '@media (max-width: 600px)': {
                    animation: "none",
                    transform: "none",
                    '&:hover': {
                        transform: 'none'
                    }
                }
            }}

        >
            VIMIN NANAVATI
        </Box>
    )
}