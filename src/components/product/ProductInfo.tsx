import { Box, Button, Container, Divider, IconButton, Link, Rating, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import ProductImageSelector from "./ProductImageSelector";
import TypographySpecifications from "./TypographySpecifications";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import BlueLink from "../common/BlueLink";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface ProductInfoProps {

}

const ProductInfo: FunctionComponent<ProductInfoProps> = () => {

    const isBestseller = true;



    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Container sx={{ padding: '10%' }} maxWidth="xl">
                <Box sx={{ minHeight: '20vh' }}>
                    {
                        isBestseller
                            ?
                            <Typography sx={{
                                border: '1px solid orange',
                                color: 'orange',
                                display: 'inline-block',
                                padding: '8px',
                                fontWeight: 'bold',
                                borderRadius: '35px',
                                fontSize: '12px',
                                marginBottom: '20px',
                                lineHeight: '0.7'
                            }}>
                                Бестселлер
                            </Typography>
                            : <></>
                    }
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>name</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Rating size="small" name="read-only" precision={0.1} value={4} readOnly />
                            <Button size="small">
                                3096 отзывов
                            </Button>
                            <Button size="small" startIcon={<HelpOutlineIcon />}>
                                270 вопросов
                            </Button>
                            <Button size="small" startIcon={<FavoriteBorderIcon />}>
                                В избранное
                            </Button>
                            <Button size="small" startIcon={<IosShareIcon />}>
                                Поделиться
                            </Button>
                        </Box>
                        <Typography sx={{ fontSize: '14px', color: 'gray' }}>Код товара: 12345</Typography>
                    </Box>
                </Box>

                <Divider sx={{ margin: '10px 0 20px 0' }} />

                <Box sx={{
                    height: '100vh',
                    display: 'flex',
                    position: 'relative',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <ProductImageSelector />
                    <Box sx={{
                        width: '40%',
                        position: 'relative',
                        background: 'url(https://playgame34.ru/wp-content/uploads/2020/07/Xiao-Mi-Mi-10-Pro-IMAK-3D.jpg)',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} >
                        <Typography sx={{
                            position: 'absolute',
                            right: '0',
                            margin: '10px',
                            padding: '10px',
                            lineHeight: '0.5',
                            color: 'white',
                            background: '#f91155',
                            borderRadius: '5px',
                            fontWeight: 'bold'
                        }}>
                            -25%
                        </Typography>
                    </Box>
                    <Box sx={{ width: '25%' }}>
                        <TypographySpecifications specificationName="Тип" specification={"Смартфон"} />
                        <TypographySpecifications specificationName="Диагональ экрана, дюймы" specification={"6.58"} />
                        <TypographySpecifications specificationName="Емкость аккумулятора, мАч" specification={"5000"} />
                        <TypographySpecifications specificationName="Процессор" specification={"Snapdragon 662 (8 ядер), 2.0 ГГц"} />
                        <TypographySpecifications specificationName="Основной материал корпуса" specification={"Пластик"} />
                        <TypographySpecifications specificationName="Беспроводные интерфейсы" specification={"Bluetooth, NFC, Wi-Fi"} />
                        <TypographySpecifications specificationName="Разрешение экрана" specification={"2400x1080"} />
                        <TypographySpecifications specificationName="Число ядер процессора" specification={"8"} />
                        <TypographySpecifications specificationName="Оперативная память" specification={"4 ГБ"} />
                        <TypographySpecifications specificationName="Встроенная память" specification={"64 ГБ"} />
                    </Box>
                    <Box sx={{ height: '100vh', width: '25%' }}>
                        <Box sx={{
                            boxShadow: '0 0 10px rgba(25,118,210,0.2)',
                            width: '100%',
                            padding: '20px',
                            borderRadius: '15px',
                            height: '250px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start'
                        }}>
                            <Box>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f91155' }}>
                                        12589 Р
                                    </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginLeft: '10px', position: 'relative' }}>
                                        14980 Р
                                        <Box sx={{
                                            width: '110%',
                                            height: '1.5px',
                                            backgroundColor: '#f91155',
                                            position: 'absolute',
                                            top: '30%',
                                            left: '-5%',
                                            transform: 'rotate(-5deg)'
                                        }} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography sx={{
                                        background: '#ffd540',
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                        padding: '10px',
                                        lineHeight: '0.5'
                                    }}>
                                        2425 Р
                                    </Typography>
                                    <Typography sx={{ color: 'gray', fontSize: '14px', paddingLeft: '5px' }}>x 6 мес</Typography>
                                </Box>
                                <Button sx={{ marginTop: '10px' }} startIcon={<NotificationsNoneIcon />} >
                                    Узнать о снижении цены
                                </Button>
                            </Box>
                            <Box sx={{ width: '100%' }}>
                                {
                                    !true
                                        ? <Button size="large" variant="contained" sx={{ width: '100%', marginTop: '10px' }}>
                                            В корзину
                                        </Button>
                                        : <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                            <Button variant="contained" sx={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                                                <Typography sx={{ lineHeight: '1', fontWeight: '500' }}>В корзине</Typography>
                                                <Typography sx={{ lineHeight: '1', fontSize: '12px' }}>Перейти</Typography>

                                            </Button>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                border: '#1976d2 2px solid',
                                                borderRadius: '5px'
                                            }}>
                                                <IconButton color="primary" >
                                                    <RemoveIcon />
                                                </IconButton>
                                                <Typography>
                                                    5 шт.
                                                </Typography>
                                                <IconButton color="primary" >
                                                    <AddIcon />
                                                </IconButton>
                                            </Box>                                        </Box>
                                }
                                <Typography sx={{ fontSize: '14px', fontWeight: '500', paddingTop: '5px', display: 'flex', alignItems: 'center' }}>
                                    <LocalShippingIcon sx={{ marginRight: '10px' }} />
                                    Доставка завтра
                                </Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', paddingTop: '15px' }}>Часто задаваемые вопросы</Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', paddingTop: '5px', justifyContent: 'space-between' }}>
                            <Box>
                                <BlueLink textLink="Условия доставки" />
                                <BlueLink textLink="Способы оплаты" />
                            </Box>
                            <Box>
                                <BlueLink textLink="Возврат товаров" />
                                <BlueLink textLink="Возврат денег" />
                            </Box>
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', paddingTop: '15px' }}>Информация о доставке</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '14px' }}>Казань</Typography>
                            <BlueLink textLink="Укажите полный адрес" />
                        </Box>
                        <Typography sx={{ color: 'gray', fontSize: '14px' }}>
                            Доставка со склада <Typography component="span" sx={{ fontWeight: 'bold' }}>PLAZA</Typography>
                        </Typography>
                        <Typography sx={{ paddingTop: '15px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                            <CheckCircleOutlineIcon sx={{ marginRight: '10px' }} />
                            В наличии
                        </Typography>


                    </Box>
                </Box>

            </Container>
        </Box>
    );
}

export default ProductInfo;