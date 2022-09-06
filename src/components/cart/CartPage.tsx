import { Box } from "@mui/material";
import { IProductInCart } from "../../types/products";
import CartPageMain from "./CartPageMain";
import CartPageMobile from "./CartPageMobile";

interface CartPageProps {
    productsInCartTEST: IProductInCart[];
}

const CartPage = ({ productsInCartTEST }: CartPageProps) => {
    return (
        <Box sx={{maxWidth:'100%'}}>
            <CartPageMobile productsInCartTEST={productsInCartTEST} />
        </Box>
        
    )
}

export default CartPage;