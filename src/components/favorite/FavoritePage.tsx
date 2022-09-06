import { Box, Button, Container, Divider, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { IProductInCart, IProductInFavorite } from "../../types/products";
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { getProductsInFavorite, setProductsInFavorite } from "../../actions/products";
import ItemCardMain from "../main/ItemCardMain";
interface FavoritePageProps {

}

const FavoritePage = ({ }: FavoritePageProps) => {

    const { productsInFavorite, objects } = useTypedSelector(state => state.products)
    const productsInCartStorage: IProductInCart[] = JSON.parse(localStorage.getItem('productsInCart')  || '[]');
    const dispatch = useDispatch();

    useEffect(() => {
        const tempProducts: IProductInFavorite[] = JSON.parse(localStorage.getItem('productsInFavorite') || '[]');
        if (!productsInFavorite.length) {
            if (tempProducts.length) {
                dispatch<any>(setProductsInFavorite(tempProducts));
            }
        }
        const tempProductsId = tempProducts.map(p => { return p.productId });
        dispatch<any>(getProductsInFavorite(tempProductsId));
    }, [productsInFavorite])

    const [selectedSorting, setSelectedSorting] = useState('Сначала дешевые');

    const onChangeSelectedSorting = (event: SelectChangeEvent) => {
        setSelectedSorting(event?.target.value);
    }
    console.log(productsInFavorite)
    return (
        <Box sx={{ backgroundColor: '#f7f8f9', width: '100%', minHeight: '100vh', paddingTop: '100px' }}>
            <Container maxWidth="xl" sx={{ marginTop: '3%' }}>

                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '20%' }}>
                        <Button sx={{
                            textTransform: 'none', fontSize: '16px', padding: '10px', borderRadius: '10px', color: '#4f4f4f',
                            fontWeight: '400', justifyContent: 'flex-start'
                        }}
                            fullWidth>
                            <FeaturedPlayListIcon sx={{ fontSize: '30px', marginRight: '10px' }} />
                            Товары и списки
                        </Button>
                        <Button sx={{
                            textTransform: 'none', fontSize: '16px', padding: '10px', borderRadius: '10px', color: '#4f4f4f',
                            fontWeight: '400', justifyContent: 'flex-start'
                        }}
                            fullWidth>
                            <LocalMallIcon sx={{ fontSize: '30px', marginRight: '10px' }} />
                            Магазины
                        </Button>
                        <Button sx={{
                            textTransform: 'none', fontSize: '16px', padding: '10px', borderRadius: '10px', color: '#4f4f4f',
                            fontWeight: '400', justifyContent: 'flex-start'
                        }}
                            fullWidth>
                            <StarIcon sx={{ fontSize: '30px', marginRight: '10px' }} />
                            Коллекция
                        </Button>
                    </Box>
                    <Box sx={{ width: '100%', height: '100%' }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Товары и списки</Typography>
                        <Select value={selectedSorting} onChange={onChangeSelectedSorting} size="small" sx={{ marginTop: '3%' }}>
                            <MenuItem value="Сначала дешевые">
                                Сначала дешевые
                            </MenuItem>
                            <MenuItem value="Сначала дорогие">
                                Сначала дорогие
                            </MenuItem>
                            <MenuItem value="По размеру скидки">
                                По размеру скидки
                            </MenuItem>
                        </Select>
                        <Divider sx={{ margin: '1% 0' }} />
                        <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                            {
                                objects.map((item, ind) =>
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
                            <Box sx={{width: '250px'}}></Box>
                            <Box sx={{width: '250px'}}></Box>
                            <Box sx={{width: '250px'}}></Box>
                        </Box>
                    </Box>
                </Box>

            </Container>
        </Box>
    );
}

export default FavoritePage;