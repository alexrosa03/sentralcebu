import React from 'react';
import { Box } from '@mui/material';

import cousin from '../images/cousin.jpg'

function Index() {   
    console.log('test')
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <img style={{
                height: '300px',
                width: '300px',
            }}src={cousin}></img>
        </Box>
    )
}

export default Index;