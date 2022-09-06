import { Box, Button, Hidden, IconButton, Link, Rating, styled, Typography } from '@mui/material';
import * as React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useDispatch } from 'react-redux';
import { addProductCart, removeProductCart, toggleProductFavorite } from '../../actions/products';
import ItemCardPhotos from './ItemCardPhotos';
import { IReviewProduct } from '../../types/products';

interface IProps {
    id: number;
    price: number;
    priceWithoutDiscount: number; 
    isBestSeller: boolean; 
    countBonuses: number; 
    name: string;
    averageDateDelivery: number;
    photosURL: string[];
    countInCart?: number;
    isFavorite: boolean;
    weight: number;
    rating: number;
    categoryFullPath: string;
    countOrders: number;
}

function ItemCardMain({
    price, priceWithoutDiscount, isBestSeller, countBonuses, 
    name, averageDateDelivery, id, photosURL, 
    countInCart, isFavorite, weight, rating, categoryFullPath, countOrders}: IProps) {

    const myProps: IProps = {
        averageDateDelivery,
        countBonuses,
        id,
        isBestSeller,
        name,
        price,
        priceWithoutDiscount,
        photosURL,
        countInCart,
        isFavorite,
        weight,
        rating,
        categoryFullPath,
        countOrders
    }

    const myPrice = price;
    const myPriceWithoutDiscount = priceWithoutDiscount;
    const myDiscountProcent = Math.round(100- myPrice / myPriceWithoutDiscount * 100);
    const myIsBestSeller = isBestSeller;
    const myCountBonuses = countBonuses;
    const myName = name;
    const myAverageDateDelivery = averageDateDelivery;
    let now = new Date();
    let myDateDelivery = new Date(now);
    myDateDelivery.setDate(now.getDate() + myAverageDateDelivery);

    // const [countInCart, setCountInCart] = React.useState<number>(0)
    // const [isInFavorite, setIsInFavorite] = React.useState<boolean>(false)

    const dispatch = useDispatch();

    const toggleFavorite = () => {
        dispatch<any>(toggleProductFavorite(id))
    }

    const addItem = () => {
        dispatch<any>(addProductCart(id))
    }

    const removeItem = () => {
        dispatch<any>(removeProductCart(id))
    }
    const myPhoto = photosURL[0]
    const myUrl = `/product?id=${id}`;

    const Root = styled('div')(({theme}) => ({
        backgroundColor: 'white',
        marginTop: '2%',
        position: 'relative',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            width: '42%', 
            minWidth: '200px',
            height: '370px',
            margin:'8% 2%'
        },
        [theme.breakpoints.up('sm')]: {
            width: '30%', 
            height: '430px',
            margin:'4% 0'
        },
        [theme.breakpoints.up('md')]: {
            width: '30%', 
            height: '470px',
            margin:'3% 0'
        },
        [theme.breakpoints.up('lg')]: {
            width: '18%', 
            height: '500px',
            margin:'2% 0'
        }
    }))

    const Name = styled('div')(({theme}) => ({
        overflow: 'hidden',
        textOverflow: 'clip',
        [theme.breakpoints.down('md')]: {
            maxHeight: '5%'
        },
        [theme.breakpoints.up('md')]: {
            maxHeight: '13%'
        }
    }))

    return ( 
        <Root>
            <Box sx={{width:'100%', height: '50%', position: 'relative'}}>
                <Hidden mdDown>
                    {
                        isFavorite
                            ? <IconButton sx={{ color: 'red', position: 'absolute', right: '0', margin: '5px', zIndex: '99' }}
                                onClick={toggleFavorite} >
                                <FavoriteOutlinedIcon />
                            </IconButton>
                            : <IconButton sx={{ color: '#1976d2', position: 'absolute', right: '0', margin: '5px', zIndex: '99' }}
                                onClick={toggleFavorite}>
                                <FavoriteTwoToneIcon />
                            </IconButton>
                    }
                </Hidden>
                <Box sx={{
                        backgroundColor: '#d00100',
                        position: 'absolute',
                        bottom: '0',
                        margin: '5px',
                        padding: '10px',
                        borderRadius: '30px'
                    }}>
                    <Typography sx={{fontWeight: 'bold', color: 'white', fontSize: '16px', lineHeight: '0.5'}} >
                        -{myDiscountProcent}%
                    </Typography>
                </Box>
                {
                    myCountBonuses
                        ? <Box sx={{
                            backgroundColor: 'black',
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            bottom: '0',
                            right: '0',
                            margin: '5px',
                            padding: '10px',
                            borderRadius: '30px'
                        }}>
                            
                            <Typography sx={{ color: 'white', fontWeight: 'bold', lineHeight: '0.0', display: 'flex', alignItems: 'center' }}> 
                                <AcUnitIcon sx={{ color: 'white', fontSize: '14px', marginRight: '5px' }} />
                                {myCountBonuses} 
                            </Typography>
                        </Box>
                        : null
                }
                <ItemCardPhotos photos={photosURL} id={id} />
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', margin: '0 10px', marginTop: '25px'}} >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {myPrice} P
                </Typography>
                <Typography sx={{fontSize: '14px', paddingLeft: '10px', position: 'relative'}}>
                    {myPriceWithoutDiscount} P 
                    <Box sx={{
                        width: '100%', 
                        height: '1.5px', 
                        backgroundColor: 'red', 
                        position: 'absolute', 
                        top: '45%', 
                        left: '10%',
                        transform: 'rotate(-5deg)'}} />
                </Typography>
            </Box>
            <Hidden lgDown>
                {
                    myIsBestSeller
                        ? <Typography sx={{ fontSize: '14px', margin: '0 10px', color: 'orange', fontWeight: 'bold' }} > Бестселлер </Typography>
                        : null
                }
            </Hidden>
            
            <Name sx={{maxHeight: '15%', overflow: 'hidden'}} >
                <Link
                    href={myUrl}
                    sx={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'wrap',
                        overflow: 'hidden',
                        textDecoration: 'none',
                        color: 'black',
                        margin: '0',
                        padding: '0'
                    }}>
                        <Typography sx={{padding: '0 10px'}}>
                            {myName}
                        </Typography>
                </Link>
            </Name>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Hidden smDown>
                    <Rating precision={0.1} readOnly value={rating} sx={{margin: '0px 10px'}} />
                </Hidden>
                <Hidden mdDown>
                    <Typography sx={{ fontSize: '12px', color: '#99999d', fontWeight: 'bold', paddingTop: '3px' }}>
                        {countOrders} заказов
                    </Typography>
                </Hidden>
            </Box>
            
            
            <Box sx={{ position: 'absolute', bottom: '0', display: 'flex', flexDirection: 'column', padding: '10px', width: '100%' }}>
                {
                    countInCart
                        ? <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                margin: '5px 0'
                            }}>
                            <IconButton color="primary" onClick={removeItem}>
                                <RemoveIcon />
                            </IconButton>
                            <Typography>
                                {countInCart} шт.
                            </Typography>
                            <IconButton color="primary" onClick={addItem}>
                                <AddIcon />
                            </IconButton>

                        </Box>
                        : <Button
                            sx={{ maxWidth: '70%', margin: '5px 0' }}
                            variant="contained"
                            onClick={addItem}>
                            В корзину
                        </Button>
                }
                <Hidden mdDown>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        {myDateDelivery.toLocaleDateString().substring(0, 5)} <Typography sx={{ color: 'gray' }} component="span">
                            доставит PLAZA
                        </Typography>
                    </Typography>
                </Hidden>
            </Box>
            

        </Root>
    );
}

export default ItemCardMain;