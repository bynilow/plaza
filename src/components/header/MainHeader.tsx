import FaceIcon from '@mui/icons-material/Face';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Box, Button, Container, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface MainHeaderProps {
    countInFavorite: number;
    countInCart: number;
}

const MainHeader = ({countInFavorite, countInCart}:MainHeaderProps) => {

    const [searchText, setSearchText] = useState('');

    return (
        <Container
            maxWidth="xl"
            sx={{ display: 'flex', alignItems: 'center', padding: '10px', justifyContent: 'space-between' }}  >
            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }} flex="1">
                <Typography
                    color='primary'
                    component={NavLink}
                    to="/"
                    variant='h3'
                    sx={{ fontWeight: 'bold', margin: '0 10px', letterSpacing: '-8px', textDecoration: 'none' }}>
                    PLAZA
                </Typography>
                <Button
                    sx={{ margin: '0 10px' }}
                    variant="contained"
                    startIcon={<FormatListBulletedOutlinedIcon />} >
                    Каталог
                </Button>
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

            <Box>
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
        </Container>
    );
}

export default MainHeader;