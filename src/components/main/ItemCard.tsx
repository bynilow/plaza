import { Box, Button, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useDispatch } from 'react-redux';
import { addProductCart } from '../../actions/products';

interface IProps {
    id: number;
    price: number;
    priceWithoutDiscount: number; 
    isBestSeller: boolean; 
    countBonuses: number; 
    name: string;
    averageDateDelivery: number;
    photosURL: string[]
}

function ItemCard({price, priceWithoutDiscount, isBestSeller, countBonuses, name, averageDateDelivery, id, photosURL}: IProps) {

    const myProps: IProps = {
        averageDateDelivery,
        countBonuses,
        id,
        isBestSeller,
        name,
        price,
        priceWithoutDiscount,
        photosURL
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

    const [countInCart, setCountInCart] = React.useState<number>(0)
    const [isInFavorite, setIsInFavorite] = React.useState<boolean>(false)

    const dispatch = useDispatch();

    const toggleFavorite = () => {
        setIsInFavorite(!isInFavorite);
    }

    const addItem = () => {
        dispatch<any>(addProductCart(myProps))
    }

    const removeItem = () => {
        // setCountInCart(countInCart - 1)
    }

    return ( 
        <Box sx={{
            width:'250px', 
            height: '450px', 
            backgroundColor: 'white', 
            position: 'relative', 
            boxShadow: '0 0 5px rgba(0,0,0,0.2)',
            borderRadius: '10px'}}>
            <Box sx={{width:'100%', height: '50%', backgroundColor: 'blue', position: 'relative'}}>
                {
                    isInFavorite
                        ? <IconButton sx={{ color: 'red', position: 'absolute', right: '0', margin: '5px' }} onClick={toggleFavorite} >
                            <FavoriteOutlinedIcon />
                        </IconButton>
                        : <IconButton sx={{ color: 'white', position: 'absolute', right: '0', margin: '5px' }} onClick={toggleFavorite}>
                            <FavoriteTwoToneIcon />
                        </IconButton>
                }
                
                <Box sx={{
                        backgroundColor: '#d00100',
                        position: 'absolute',
                        bottom: '0',
                        margin: '5px',
                        padding: '10px',
                        borderRadius: '30px'
                    }}>
                    <Typography sx={{fontWeight: 'bold', color: 'white', fontSize: '16px'}} >
                        -{myDiscountProcent}%
                    </Typography>
                </Box>
                {
                    myCountBonuses
                        ? <Box sx={{
                            backgroundColor: 'black',
                            position: 'absolute',
                            display: 'flex',
                            bottom: '0',
                            right: '0',
                            margin: '5px',
                            padding: '10px',
                            borderRadius: '30px'
                        }}>
                            <AcUnitIcon sx={{ color: 'white' }} />
                            <Typography sx={{ color: 'white', fontWeight: 'bold' }}> {myCountBonuses} </Typography>
                        </Box>
                        : null
                }
                
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', margin: '10px'}} >
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
            {
                myIsBestSeller
                ? <Typography sx={{fontSize: '14px', margin: '10px', color: 'orange', fontWeight: 'bold'}} > Бестселлер </Typography>
                : null
            }
            <Box sx={{maxHeight: '15%', overflow: 'hidden'}}>
                <Typography sx={{ margin: '10px', textOverflow: 'ellipsis', whiteSpace: 'wrap', overflow: 'hidden' }}>
                    {myName}
                </Typography>
            </Box>
            
            <Box sx={{ position: 'absolute', bottom: '0', display: 'flex', flexDirection: 'column', padding: '10px' }}>
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
                            sx={{ maxWidth: '60%', margin: '5px 0' }}
                            variant="contained"
                            onClick={addItem}>
                            В корзину
                        </Button>
                }
                <Typography sx={{ fontWeight: 'bold' }}>
                    {myDateDelivery.toLocaleDateString()} <Typography sx={{ color: 'gray' }} component="span">
                        доставит PLAZA
                    </Typography>
                </Typography>
            </Box>
            

        </Box>
    );
}

export default ItemCard;