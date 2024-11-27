import React from "react";
import sentralLoading from '../images/sentralLoading.jpg';
import Box from '@mui/material/Box';

function Landing() {
    return (
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <Box 
                className='imagePulseBox' 
            >
                <div
                style={{
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    animation: 'pulse 1s 0.5s infinite',
                }}>
                <img 
                    src={sentralLoading}
                    alt="Sentral Loading"
                    style={{
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                    }}
                    
                />
                </div>
            </Box>
        </Box>
    )
}

export default Landing;