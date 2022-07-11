import { AppBar, Badge, Box, Button, Container, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import * as React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import FaceIcon from '@mui/icons-material/Face';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { NavLink } from 'react-router-dom';
import { IProductInCart } from '../../types/products';

interface IHeaderProps {
    productsInCartStorage: IProductInCart[];
}

function Header({productsInCartStorage}: IHeaderProps) {
    const {productsInCart, productsInFavorite} = useTypedSelector(state => state.products)
    const [searchText, setSearchText] = React.useState('');

    let countInCart = 0;
    if(productsInCartStorage.length){
        productsInCartStorage.forEach((i, ind) => {
            countInCart += i.count;
        })
    }
    let countInFavorite = productsInFavorite.length;
    return ( 
        <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
            <Container
                maxWidth="xl"
                sx={{ display: 'flex', alignItems: 'center', padding: '10px', justifyContent: 'space-between' }}  >
                <Box sx={{ display: 'flex', width: '100%', alignItems: 'center'}} flex="1">
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
            
        </AppBar>
    );
}

export default Header;