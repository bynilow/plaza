import { Box, IconButton } from '@mui/material';
import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';

const imgSlide = styled.img`
    background-size: contain;
`

function Slider() {
    return ( 
        <Box sx={{ width: '1000px', height: '400px', backgroundColor: 'gray', borderRadius: '15px', position: 'absolute',  }}>
            <Box sx={{position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center'}}>
                <IconButton sx={{ color: 'white', position: 'absolute', left: '0', margin: '10px' }}>
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton sx={{ color: 'white', position: 'absolute', right: '0', margin: '10px' }}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
            <Box sx={{width:'100%', height: '100%',display: 'flex'}}>
                <Box sx={{width: '100%', height: '100%'}}>
                    <img 
                    src="https://c.wallhere.com/photos/22/27/2560x1600_px_landscape_nature-1077192.jpg!d" />
                </Box>
                <Box sx={{width: '100%', height: '100%'}}>
                    <img src="https://w-dog.ru/wallpapers/3/1/432763282978206/pejzazh-gor-s-nebom-i-oblakami.jpg" />
                </Box>
                <Box sx={{width: '100%', height: '100%'}}>
                    <img src="https://w-dog.ru/wallpapers/9/15/458745441613494/vajoming-ssha-grand-teton-nacionalnyj-park-snejk-river-grand-titon-nacionalnyj-park-zakat-oblaka-vecher-gory-pole-cvety-zelen-les-derevya-sosny.jpg" />
                </Box>       
            </Box>
        </Box>
    );
}

export default Slider;