import { Box, CircularProgress, Container } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, getProductsInCart, setProductsInCart } from '../../actions/products';
import { IProductInCart } from '../../types/products';
import { useTypedSelector } from '../hooks/useTypedSelector';
import ItemCardMain from './ItemCardMain';

interface MainProps {
    
}

const MainPage: React.FC = () => {
    const { products, isLoading, productsInCart, productsInFavorite } = useTypedSelector(state => state.products);
    const dispatch = useDispatch()
    const productsInCartStorage: IProductInCart[] = JSON.parse(localStorage.getItem('productsInCart')  || '[]');
    const productsId = productsInCartStorage.map(p => {return p.productId})
    console.log(productsInCartStorage)
    useEffect(() => {
        dispatch<any>(getProducts());
        dispatch<any>(setProductsInCart(productsInCartStorage))
        // if(!productsInCart.length) dispatch<any>(getProductsInCart(productsId));
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
    if (isLoading) {
        return <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}} > <CircularProgress /> </Box>
    }
    return (
        <Box sx={{ marginTop: '100px', height: '400vh' }}>
            <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {
                    products.map((item, ind) =>
                        <ItemCardMain
                            key={item.id}
                            id={item.id}
                            averageDateDelivery={item.averageDateDelivery}
                            countBonuses={item.countBonuses}
                            isBestSeller={item.isBestSeller}
                            name={item.name}
                            photosURL={item.photosURL}
                            price={item.price}
                            priceWithoutDiscount={item.priceWithoutDiscount}
                            isFavorite={
                                productsInFavorite.findIndex(p => p.productId === item.id) > -1
                            }
                            countInCart={productsInCartStorage.find(p => p.productId === item.id)?.count}
                            weight={item.weight}
                            rating={item.rating}
                            categoryFullPath={item.categoryFullPath}
                            countOrders={item.countOrders} />)
                }


            </Container>
        </Box>
    );
}

export default MainPage;
