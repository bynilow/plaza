import { AppBar, Badge, Box, Button, Container, Hidden, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import * as React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import FaceIcon from '@mui/icons-material/Face';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { NavLink } from 'react-router-dom';
import { IProductInCart, IProductInFavorite } from '../../types/products';
import MainHeader from './MainHeader';
import MobileHeader from './MobileHeader';

interface IHeaderProps {
    productsInCartStorage: IProductInCart[];
    productsInFavoriteStorage: IProductInFavorite[];
}

function Header({ productsInCartStorage, productsInFavoriteStorage }: IHeaderProps) {
    const { productsInCart, productsInFavorite } = useTypedSelector(state => state.products)


    let countInCart = 0;
    if (productsInCartStorage.length) {
        productsInCartStorage.forEach((i, ind) => {
            countInCart += i.count;
        })
    }
    let countInFavorite = productsInFavorite.length;
    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
            <Hidden mdUp> 
                <MobileHeader countInCart={countInCart} countInFavorite={countInFavorite} />
            </Hidden>
            <Hidden mdDown>
                <MainHeader countInCart={countInCart} countInFavorite={countInFavorite} />
            </Hidden>
        </AppBar>
    );
}

export default Header;