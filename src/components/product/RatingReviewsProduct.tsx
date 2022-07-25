import { Box, LinearProgress, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface RatingReviewsProductsProps {
    ratingName: string;
    countRatingReviews: number;
    countReviews: number;
}
/// 150, 85 ***, 60 **, 5 * 
 
const RatingReviewsProducts = ({ratingName, countRatingReviews, countReviews}: RatingReviewsProductsProps) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '5px' }}>
            <Typography sx={{ fontSize: '12px', color: 'gray', fontWeight: '400', whiteSpace: 'nowrap', width: '20%' }}>
                {ratingName}
            </Typography>
            <LinearProgress
                variant="determinate"
                value={countRatingReviews / countReviews * 100}
                sx={{ height: '7px', borderRadius: '10px', width: '60%' }} />
            <Typography sx={{ fontSize: '12px' }}>
                {countRatingReviews}
            </Typography>
        </Box>
    );
}
 
export default RatingReviewsProducts;