import { Box, Button, FormControlLabel, IconButton, Radio, RadioGroup } from "@mui/material";
import * as React from 'react';

interface IItemCardPhotosProps {
    photos: string[];
}

const ItemCardPhotos = ({photos}:IItemCardPhotosProps) => {

    const [selectedPhoto, setSelectedPhoto] = React.useState<number>(0)

    const changePhoto = (ind:number) => {
        setSelectedPhoto(ind)
    }

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Box sx={{
                width: '100%',
                height: '100%',
                background: 'url(' + photos[selectedPhoto] + ')',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }} />
            <Box sx={{display: 'flex', position: 'absolute', top: '0', width: '100%', height: '100%', zIndex: '1'}}>
                    {
                        photos.map((i, ind) => <Button 
                        key={ind}
                        onMouseOver={() => changePhoto(ind)}
                        sx={{background: 'black', margin: '5px', width: '100%', height: '100%', opacity: '0', cursor: 'default'}} />)
                    }
                </Box>
            <Box sx={{
                display: 'flex',
                position: 'absolute',
                right: '0',
                left: '0',
                bottom: '3',
                justifyContent: 'center'
            }}>
                
                <RadioGroup row defaultValue={0} sx={{transform: 'scale(0.7)'}} >
                    {
                        photos.map((i, ind) => <Radio
                            size="small"
                            key={ind}
                            checked={selectedPhoto === ind}
                            value={ind}
                            onClick={() => changePhoto(ind)} />)
                    }
                </RadioGroup>
                
            </Box>
        </Box>
    );
}

export default ItemCardPhotos;