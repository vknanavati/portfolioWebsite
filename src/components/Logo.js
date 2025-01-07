import {Box} from '@mui/material';

export function Logo() {
    return (
        <Box
            sx={{
                color: "white",
                fontSize: "100px",
                textAlign: "center",
                fontFamily: "'Tilt Neon', sans-serif",
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
                           `
                    },
                    '50%': {
                        textShadow: `
                            0 0 10px #FF00FF,
                            0 0 20px #FF00FF,
                            0 0 40px #FF00FF,
                            0 0 80px #FF00FF,
                            0 0 100px #FF00FF
                        `,
                    },
                    '100%': {
                        textShadow: `
                            0 0 5px #00FFFF,
                            0 0 10px #00FFFF,
                            0 0 20px #00FFFF,
                            0 0 40px #00FFFF,
                            0 0 60px #00FFFF
                        `,
                    },
                },
                border: "5px solid #FFF",
                // border: "2px solid #FF00FF",
                padding: 6,
                borderRadius: 8,
                boxShadow: `
                    0 0 4.2px #FFF,
                    0 0 4.2px #FFF,
                    0 0 32px #FF00FF,
                    0 0 20.8px #FF00FF,
                    0 0 44.8px #FF00FF,
                    inset 0 0 20.8px #FF00FF
                `
            }}

        >
            VIMIN NANAVATI
        </Box>
    )
}