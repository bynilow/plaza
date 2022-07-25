import { Box, Divider, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface TypographySpecificationsProps {
    specificationName: string;
    specification: string;
}
 
const TypographySpecifications = ({specificationName, specification}:TypographySpecificationsProps) => {
    return ( 
        <Box sx={{
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '100%', 
            margin: '10px', 
            alignItems: 'center', 
            position: 'relative'
        }}>
            <Typography sx={{ color: 'gray', fontSize: '14px', width: '50%', marginRight: '20px', position: 'relative' }}>
                {specificationName}
                <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    zIndex: '1',
                    height: '1px',
                    background: '#bbbbbb'
                }} />
            </Typography>

            <Typography sx={{fontSize: '14px', fontWeight: '400', width: '50%', overflow: 'hidden', zIndex: '99'}}>
                {specification}
            </Typography>
        </Box>
    );
}
 
export default TypographySpecifications;