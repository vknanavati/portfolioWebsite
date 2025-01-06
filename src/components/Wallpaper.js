import {Box} from '@mui/material';
import BACKGROUND from "../images/background.png"

export function Wallpaper({children}) {
    return (
        <Box
        sx={{
            backgroundImage: `url(${BACKGROUND})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'

        }}
        >
            {children}
        </Box>
    )
}