import { Box, CircularProgress, Container, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../actions/products';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import DiscountCard from './DiscountCard';
import ItemCard from './ItemCard';
import Slider from './Slider';

interface MainProps {
    
}

const Main: React.FC = () => {
    const { products, isLoading, productsInCart } = useTypedSelector(state => state.products);
    console.log(productsInCart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch<any>(getProducts());
    }, [])

    interface IItems {
        id: number;
        name: string;
        price: number;
        priceWithoutDiscount: number;
        isBestSeller: boolean;
        countBonuses: number;
        averageDateDelivery: number;
    }

    const items: IItems[] = [

    ]
{/* <Typography sx={{paddingTop: '100px'}} >Данные загружаются...</Typography> */}
    if (isLoading) {
        return <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}} > <CircularProgress /> </Box>
    }
    return (
        <Box sx={{ marginTop: '100px', height: '400vh' }}>
            <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {
                    products.map((item, ind) =>
                        <ItemCard
                            key={item.id}
                            id={item.id}
                            averageDateDelivery={item.averageDateDelivery}
                            countBonuses={item.countBonuses}
                            isBestSeller={item.isBestSeller}
                            name={item.name}
                            photosURL={item.photosURL}
                            price={item.price}
                            priceWithoutDiscount={item.priceWithoutDiscount} />)
                }


            </Container>
        </Box>
    );
}

export default Main;
