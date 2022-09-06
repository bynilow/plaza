import { Box, Button, Checkbox, Divider, FormControlLabel, IconButton, TextField, Typography, InputAdornment, OutlinedInput, Link } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import { addProductCart, deleteProductFromCart, removeProductCart, setCountProductCart, toggleProductFavorite } from "../../actions/products";
import { useDispatch } from "react-redux";
import { IProduct, IProductInCart } from "../../types/products";

interface IItemCardCartProps {
    item: IProduct;
    count: number;
    isFavorite: boolean;
    updateMissingPrice: () => void;
    toggleChecked: (id: number) => void;
    checkedProducts: number[];
}

const ItemCardCartMobile = ({ item, count, isFavorite, updateMissingPrice, toggleChecked, checkedProducts }: IItemCardCartProps) => {

    const dispatch = useDispatch();

    const [isEditCount, setIsEditCount] = React.useState<boolean>(false);
    const [countInCart, setCountInCart] = React.useState<number>(count);

    const isChecked = checkedProducts.findIndex(cp => cp === item.id) > -1;


    const onChangeCountField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCount = Number(e.target.value)
        if (Number.isInteger(newCount) && newCount < 1000) {
            if (newCount < 1) {
                setCountInCart(1);
                dispatch<any>(setCountProductCart(item.id, 1))
            }
            else {
                setCountInCart(newCount);
                dispatch<any>(setCountProductCart(item.id, newCount))
            }
            updateMissingPrice();
        }
    }

    const addProduct = () => {
        if (countInCart + 1 < 1000) {
            dispatch<any>(addProductCart(item.id))
            setCountInCart(countInCart + 1);
            updateMissingPrice();
        }
    }

    const removeProduct = () => {
        if (countInCart - 1 > 0) {
            dispatch<any>(removeProductCart(item.id))
            setCountInCart(countInCart - 1);
            updateMissingPrice();
        }
    }

    const toggleFavorite = () => {
        dispatch<any>(toggleProductFavorite(item.id))
    }

    const deleteProduct = () => {
        dispatch<any>(deleteProductFromCart(item.id))
    }

    const onChecked = () => {
        toggleChecked(item.id);
    }

    const myUrl = `/product?id=${item.id}`;

    return (
        <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            margin: '15px' }}>
                <Checkbox checked={isChecked} onChange={onChecked} />
                <Box
                    sx={{
                        background: 'url(' + item.photosURL[0] + ')',
                        position: 'relative',
                        width: '100px', height: '100px',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}>
                    <Link href={myUrl} sx={{ width: '100%', height: '100%', position: 'absolute' }}></Link>
                </Box>
            <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', paddingLeft: '15px'}}>
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
                    <Typography>
                        {item.name}
                    </Typography>
                </Link>
                <Typography sx={{ color: 'gray' }}>
                {item.weight} гр
            </Typography>
            
            <Box>
                <Typography sx={{ fontWeight: 'bold' }}>
                    {item.price * countInCart} Р
                </Typography>
                <Box sx={{display: 'flex'}}>
                    <Typography sx={{ fontSize: '12px', color: 'gray', textDecoration: 'line-through' }} >
                        {item.priceWithoutDiscount * countInCart} Р
                    </Typography>
                    <Typography sx={{ fontSize: '12px', paddingLeft: '15px' }} color="error">
                        Экономия {(item.priceWithoutDiscount - item.price) * countInCart} Р
                    </Typography>
                </Box>
            </Box>
            <Box >
                {
                    !isEditCount
                        ? <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <IconButton color="primary" onClick={removeProduct}>
                                <RemoveIcon />
                            </IconButton>
                            <Typography onClick={() => setIsEditCount(true)}>
                                {countInCart} шт.
                            </Typography>
                            <IconButton color="primary" onClick={addProduct}>
                                <AddIcon />
                            </IconButton>
                        </Box>
                        : <OutlinedInput
                            autoFocus
                            onBlur={() => setIsEditCount(false)}
                            value={countInCart}
                            onChange={onChangeCountField}
                            size="small"
                            sx={{ width: '100px' }}
                            endAdornment={<InputAdornment position="end">шт.</InputAdornment>} />

                }
            </Box>
            <Box sx={{ display: 'flex' }}>
                {
                    isFavorite
                        ? <Button size="small" color="error" sx={{ fontSize: '12px' }} onClick={toggleFavorite}>
                            В избранном
                        </Button>
                        : <Button size="small" color="primary" sx={{ fontSize: '12px' }} onClick={toggleFavorite}>
                            В избранное
                        </Button>
                }
                <Divider orientation="vertical" flexItem />
                <Button size="small" sx={{ fontSize: '12px' }} onClick={deleteProduct}>Удалить</Button>
            </Box>
            </Box>

            



        </Box>
    );
}

export default ItemCardCartMobile;