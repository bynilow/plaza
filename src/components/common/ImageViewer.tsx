import { Box, IconButton, ImageListItem } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface ImageViewerProps {
    imageURL: string;
    closeImage: (url: string) => void;
}

const ImageViewer = ({ imageURL, closeImage }: ImageViewerProps) => {
    return (
        <Box
            onClick={() => closeImage('')}
            sx={{
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.7)',
                position: 'fixed',
                top: '0', left: '0',
                margin: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '9999',
                cursor: 'pointer'
            }}>
            <Box sx={{
                borderRadius: '20px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default'
            }}>
                <IconButton
                    onClick={() => closeImage('')}
                    sx={{
                        position: 'absolute', top: '0', right: '0', margin: '10px'
                    }} >
                    <CloseIcon htmlColor="gray" />
                </IconButton>
                <Box component="img" src={imageURL} sx={{
                    maxWidth: '90vw', maxHeight: '90vh', backgroundSize: 'contain', backgroundPosition: 'center', borderRadius: '20px'
                }} />
            </Box>
        </Box>
    );
}

export default ImageViewer;