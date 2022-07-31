import { Box, CircularProgress, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useSearchParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ProductInfo from "./ProductInfo";
import ProductReviews from "./ProductReviews";

interface ProductPageProps {

}

const ProductPage: FunctionComponent<ProductPageProps> = () => {

    const {isLoading} = useTypedSelector(state => state.products);
    const [searchParams] = useSearchParams();
    const idProduct = Number(searchParams.get('id'));

    return (
        <Box>
            {
                idProduct
                    ? !isLoading
                        ? <Box>
                            <ProductInfo />
                            <ProductReviews />
                        </Box>
                        : <Box sx={{display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress sx={{ marginTop: '150px' }} />
                        </Box>
                    : <Typography sx={{textAlign: 'center', fontSize: '200px', paddingTop: '150px'}}>404</Typography>
            }
            
        </Box>
    );
}

export default ProductPage;