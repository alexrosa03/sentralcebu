import { useTheme } from '@mui/material/styles';

import { Box, Typography } from '@mui/material';

function Home() {
    return (
        <Box sx={{
            height: "70vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Typography variant="h2" component="h2">The Biggest Bar in Cebu!</Typography>
              <Typography variant="h4" component="h4">Lorem Ipsum</Typography>
            </Box>
        </Box>
    )
}

export default Home;

