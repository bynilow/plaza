import { Box, Button, Checkbox, CircularProgress, Container, Divider, FormControlLabel, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSelectedCart, getProductsInCart, setCheckedProducts, setProductsInCart, toggleCheckedAllProductsInCart, toggleCheckedProductInCart } from "../../actions/products";
import { IProductInCart, IProduct } from "../../types/products";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ItemCardCart from "./ItemCardCart";
import InfoIcon from '@mui/icons-material/Info';
import { NavLink } from "react-router-dom";
import React from "react";

interface CartPageProps {
    productsInCartTEST: IProductInCart[];
}

const CartPage = ({ productsInCartTEST }: CartPageProps) => {

    const { productsInCart, cartObjects, productsInFavorite, isLoading, checkedProductsInCart } = useTypedSelector(state => state.products);

    const dispatch = useDispatch();

    let generalPrice = 0;
    let priceWithoutDiscounts = 0;
    let countProducts = 0;
    let savingCost = 0;
    let generalWt = 0;
    
    const productsId = productsInCart.map(p => {return p.productId});
    const [isAllChecked, setIsAllChecked] = useState<boolean>(true);

    useEffect(() => {
        console.log('changed')
        const tempProducts: IProductInCart[] = JSON.parse(localStorage.getItem('productsInCart') || '[]');
        if(!productsInCart.length){
            if(tempProducts.length){
                dispatch<any>(setProductsInCart(tempProducts));
            }
        }
        const tempProductsId = tempProducts.map(p => {return p.productId});
        dispatch<any>(getProductsInCart(tempProductsId));
        dispatch<any>(setCheckedProducts(tempProductsId));
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

    const toggleChecked = (checkedProductId: number) => {
        dispatch<any>(toggleCheckedProductInCart(checkedProductId));
    }

    const toggleCheckedAll = () => {
        const tempProductsId = productsInCart.map(p => {return p.productId});
        dispatch<any>(toggleCheckedAllProductsInCart(tempProductsId));
    }

    const deleteSelected = () => {
        dispatch<any>(deleteSelectedCart())
    }

    return (
        <Box sx={{ backgroundColor: '#f7f8f9', width: '100%', minHeight: '100vh', paddingTop: '100px' }}>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ margin: '15px 0 30px 0', fontWeight: 'bold' }}>??????????????</Typography>
            
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ background: 'white', display: 'flex', flexDirection: 'column', width: '65%' }}>
                        <Box sx={{ padding: '15px' }}>
                            <FormControlLabel control={<Checkbox checked={productsId.length === checkedProductsInCart.length} onChange={toggleCheckedAll} />} label="?????????????? ??????" />
                            <Button sx={{ color: 'red' }} onClick={deleteSelected}>?????????????? ??????????????????</Button>
                        </Box>
                        <Divider />
                        {
                            generalPrice < 1000
                                ? <Box sx={{ background: '#f7f8f9', margin: '15px', padding: '15px', display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography color='error' sx={{ fontWeight: 'bold' }}>???????????? PLAZA ???????????????????????? ?????? ???????????? ???? 999 ??</Typography>
                                    <Typography color='primary' sx={{ fontWeight: 'bold' }}>???????????? ???????????? ?????? ???? {999 - generalPrice} ??</Typography>
                                </Box>
                                : null
                        }
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {
                                isLoading
                                    ? <Box sx={{display: 'flex', justifyContent: 'center', paddingTop: '50px'}}> <CircularProgress /> </Box>
                                    : productsInCart.map((item: IProductInCart, ind: number) => {
                                        const tempProduct = cartObjects.find(co => co.id === item.productId);
                                        if (tempProduct) {
                                            return <ItemCardCart
                                                key={tempProduct.id}
                                                item={tempProduct}
                                                count={item.count}
                                                isFavorite={productsInFavorite.findIndex(p => p.productId === tempProduct.id) > -1}
                                                updateMissingPrice={updateMissingPrice}
                                                toggleChecked={(id) => toggleChecked(id)}
                                                checkedProducts={checkedProductsInCart} />
                                        }

                                    })
                            }


                        </Box>
                    </Box>
                    <Box sx={{ background: 'white', display: 'flex', flexDirection: 'column', width: '34%', padding: '15px' }}>
                        <Button
                            color="success"
                            disabled={generalPrice < 1000}
                            variant="contained"
                            sx={{ borderRadius: '15px', height: '50px' }}>
                            ?????????????? ?? ????????????????????
                        </Button>
                        <Typography sx={{ fontSize: '14px', color: '#99999d', margin: '10px 0 10px 0' }}>
                            ?????????????????? ?????????????? ?? ?????????? ???????????????? ?????????? ?????????????? ?????? ???????????????????? ????????????
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
                                        ???????????????? ???????????? ???? ???????????? ??????????, ?????????? ?????????????? ?? ???????????????????? ????????????
                                    </Typography>
                                </Box>
                                : <></>
                        }

                        <Divider />
                        <Box sx={{ margin: '10px 0 10px 0' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>???????? ??????????????</Typography>
                                <Typography>{countProducts} ?????????????? ??? {
                                    generalWt > 999
                                        ? (generalWt / 1000) + " ????"
                                        : generalWt + " ????"
                                }</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>???????????? ({countProducts})</Typography>
                                <Typography sx={{ fontWeight: 'bold' }}>{priceWithoutDiscounts} ??</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box>
                                    <Typography>????????????</Typography>
                                    <Button variant="text" sx={{ height: '20px', fontSize: '10px', padding: '0' }}>??????????????????</Button>
                                </Box>
                                <Typography sx={{ fontWeight: 'bold', color: 'red' }}>-{savingCost} ??</Typography>
                            </Box>
                            <Divider sx={{ marginTop: '10px' }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>?????????? ??????????????????</Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{generalPrice} ??</Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>


            </Container>
        </Box>
    );
}

export default CartPage;