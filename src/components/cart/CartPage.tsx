import { Box, Button, Checkbox, CircularProgress, Container, Divider, FormControlLabel, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsInCart, setProductsInCart } from "../../actions/products";
import { IProductInCart, IProduct } from "../../types/products";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ItemCardCart from "./ItemCardCart";
import InfoIcon from '@mui/icons-material/Info';
import { NavLink } from "react-router-dom";

interface CartPageProps {
    productsInCartTEST: IProductInCart[];
}

const CartPage = ({ productsInCartTEST }: CartPageProps) => {

    const { productsInCart, cartObjects, productsInFavorite, isLoading } = useTypedSelector(state => state.products);
    const dispatch = useDispatch();

    let generalPrice = 0;
    let priceWithoutDiscounts = 0;
    let countProducts = 0;
    let savingCost = 0;
    let generalWt = 0;
    
    useEffect(() => {
        const tempProducts: IProductInCart[] = JSON.parse(localStorage.getItem('productsInCart') || '[]');
        if(!productsInCart.length){
            if(tempProducts.length){
                dispatch<any>(setProductsInCart(tempProducts));
            }
        }
        const tempProductsId = tempProducts.map(p => {return p.productId});
        dispatch<any>(getProductsInCart(tempProductsId));
    }, [productsInCart])

    const updateMissingPrice = () => {
        generalPrice = 0;
        countProducts = 0;
        priceWithoutDiscounts = 0;
        savingCost = 0;
        generalWt = 0;
        cartObjects.forEach((p, ind) => {
            const pc = productsInCart[ind];
            if(pc){
                generalPrice += p.price * pc.count;
                priceWithoutDiscounts += p.priceWithoutDiscount * pc.count;
                savingCost += priceWithoutDiscounts - generalPrice;
                countProducts += pc.count;
                generalWt += p.weight * pc.count;
            }
            
        })
    }
    updateMissingPrice();
    return (
        <Box sx={{ backgroundColor: '#f7f8f9', width: '100%', minHeight: '100vh', paddingTop: '100px' }}>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ margin: '15px 0 30px 0', fontWeight: 'bold' }}>Корзина</Typography>
            
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ background: 'white', display: 'flex', flexDirection: 'column', width: '65%' }}>
                        <Box sx={{ padding: '15px' }}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Выбрать все" />
                            <Button sx={{ color: 'red' }}>Удалить выбранные</Button>
                        </Box>
                        <Divider />
                        {
                            generalPrice < 1000
                                ? <Box sx={{ background: '#f7f8f9', margin: '15px', padding: '15px', display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography color='error' sx={{ fontWeight: 'bold' }}>Товары PLAZA доставляются при заказе от 999 Р</Typography>
                                    <Typography color='primary' sx={{ fontWeight: 'bold' }}>Довьте товары еще на {999 - generalPrice} Р</Typography>
                                </Box>
                                : null
                        }
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {
                                isLoading
                                    ? <Box sx={{display: 'flex', justifyContent: 'center', paddingTop: '50px'}}> <CircularProgress /> </Box>
                                    : cartObjects.map((item: IProduct, ind: number) =>
                                        <ItemCardCart
                                            key={item.id}
                                            item={item}
                                            count={productsInCart.find(p => p.productId === item.id)?.count || 1}
                                            isFavorite={productsInFavorite.findIndex(p => p.productId === item.id) > -1}
                                            updateMissingPrice={updateMissingPrice} />)

                            }


                        </Box>
                    </Box>
                    <Box sx={{ background: 'white', display: 'flex', flexDirection: 'column', width: '34%', padding: '15px' }}>
                        <Button
                            color="success"
                            disabled={generalPrice < 1000}
                            variant="contained"
                            sx={{ borderRadius: '15px', height: '50px' }}>
                            Перейти к оформлению
                        </Button>
                        <Typography sx={{ fontSize: '14px', color: '#99999d', margin: '10px 0 10px 0' }}>
                            Доступные способы и время доставки можно выбрать при оформлении заказа
                        </Typography>
                        {
                            generalPrice < 1000
                                ? <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    background: '#f7f8f9',
                                    marginBottom: '10px',
                                    padding: '10px',
                                    borderRadius: '15px',
                                }}>
                                    <Box sx={{ width: '10%' }}>
                                        <InfoIcon />
                                    </Box>
                                    <Typography sx={{ color: '#99999d' }}>
                                        Добавьте товары на нужную сумму, чтобы перейти к оформлению заказа
                                    </Typography>
                                </Box>
                                : <></>
                        }

                        <Divider />
                        <Box sx={{ margin: '10px 0 10px 0' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Ваша корзина</Typography>
                                <Typography>{countProducts} товаров • {
                                    generalWt > 999
                                        ? (generalWt / 1000) + " кг"
                                        : generalWt + " гр"
                                }</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Товары ({countProducts})</Typography>
                                <Typography sx={{ fontWeight: 'bold' }}>{priceWithoutDiscounts} Р</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box>
                                    <Typography>Скидка</Typography>
                                    <Button variant="text" sx={{ height: '20px', fontSize: '10px', padding: '0' }}>Подробнее</Button>
                                </Box>
                                <Typography sx={{ fontWeight: 'bold', color: 'red' }}>-{savingCost} Р</Typography>
                            </Box>
                            <Divider sx={{ marginTop: '10px' }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Общая стоимость</Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{generalPrice} Р</Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>


            </Container>
        </Box>
    );
}

export default CartPage;