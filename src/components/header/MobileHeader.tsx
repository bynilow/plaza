import FaceIcon from '@mui/icons-material/Face';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Box, Button, Container, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

interface MobileHeaderProps {
    countInFavorite: number;
    countInCart: number;
}

const MobileHeader = ({ countInFavorite, countInCart }: MobileHeaderProps) => {

    const [searchText, setSearchText] = useState('');

    return (
        <Container
            maxWidth="xl"
            sx={{ alignItems: 'center', padding: '10px', justifyContent: 'space-between', position: 'relative', width: '100vw' }}  >
            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                <IconButton color="primary">
                    <FormatListBulletedOutlinedIcon />
                </IconButton>
                <TextField
                    focused
                    fullWidth
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    placeholder="Искать на PLAZA"
                    size='small'
                    sx={{ margin: '0 10px' }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton color='primary' >
                                    <SearchOutlinedIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }} />
            </Box>

            <Box sx={{
                position: 'fixed',
                bottom: '0', left: '0',
                background: 'white',
                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                width: '100%',
                padding: '10px' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center' }}>
                    <Button
                        size='small'
                        component={NavLink}
                        to="/"
                        sx={{ flexDirection: 'column', alignItems: 'center', margin: '0 10px' }}>
                        <HomeOutlinedIcon />
                        Главная
                    </Button>
                    <Button
                        size='small'
                        sx={{ margin: '0 10px' }}>
                        <Badge
                            color="secondary"
                            badgeContent={countInFavorite}
                            max={99}
                            sx={{ flexDirection: 'column', alignItems: 'center', }} >
                            <FavoriteBorderIcon />
                            Избранное
                        </Badge>

                    </Button>
                    <Button
                        size='small'
                        component={NavLink}
                        to="/cart"
                        sx={{ margin: '0 10px' }}>
                        <Badge
                            color="secondary"
                            badgeContent={countInCart}
                            max={99}
                            sx={{ flexDirection: 'column', alignItems: 'center', }} >
                            <ShoppingCartOutlinedIcon />
                            Корзина
                        </Badge>
                    </Button>
                    <Button
                        size='small'
                        sx={{ flexDirection: 'column', alignItems: 'center', margin: '0 10px' }}>
                        <FaceIcon />
                        Войти
                    </Button>
                </Box>

            </Box>
        </Container>
    );
}

export default MobileHeader;