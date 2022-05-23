import { Box } from '@mui/material';
import * as React from 'react';

function DiscountCard() {
    return ( 
        <Box sx={{width: '350px', height: '150px'}}>
            <img 
            style={{width: '100%', height: '100%', backgroundSize: 'cover'}}
            src="https://img.freepik.com/free-vector/gradient-sale-background-with-discount_79603-1602.jpg?t=st=1653046795~exp=1653047395~hmac=79b921e0a56ca2f20f127aab7693bcb081ca4c2cf9061ae7ced4703d8d257700&w=1060" />
        </Box>
    );
}

export default DiscountCard;