import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import ProductInfo from "./ProductInfo";
import ProductReviews from "./ProductReviews";

interface ProductPageProps {

}

const ProductPage: FunctionComponent<ProductPageProps> = () => {


    return (
        <Box>
            <ProductInfo />
            <ProductReviews />
        </Box>
    );
}

export default ProductPage;