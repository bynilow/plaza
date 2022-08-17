import { Box, Button, Checkbox, Container, Divider, FormControlLabel, MenuItem, Rating, Select, SelectChangeEvent, Tab, Tabs, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setReviews } from "../../actions/products";
import ImageViewer from "../common/ImageViewer";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ProductReview from "./ProductReview";
import RatingReviewsProducts from "./RatingReviewsProduct";

interface ProductReviewsProps {

}

const ProductReviews: FunctionComponent<ProductReviewsProps> = () => {

    const [selectedSorting, setSelectedSorting] = useState('Сначала новые');
    const [onlyPhoto, setOnlyPhoto] = useState(false);
    const [openedImage, setOpenedImage] = useState('');

    const {productReviews} = useTypedSelector(state => state.products);
    let myProductReviews = productReviews;
    const changeSorting = () => {
        switch(selectedSorting){
            case 'Сначала новые': {
                if(myProductReviews?.reviews?.length){
                    myProductReviews?.reviews!.sort((d1:any,d2:any) => {
                        if(d1.writedDate.valueOf() > d2.writedDate.valueOf()){
                            return -1
                        }
                        if(d1.writedDate.valueOf() < d2.writedDate.valueOf()){
                            return 1
                        }
                        return 0
                    })
                }
                break;
            }
            case 'Сначала полезные': {
                if(myProductReviews?.reviews?.length){
                    myProductReviews?.reviews!.sort((r1:any,r2:any) => {
                        if(r1.helped > r2.helped){
                            return -1
                        }
                        if(r1.helped < r2.helped){
                            return 1
                        }
                        return 0
                    })
                }
                break;
            }
            case 'Сначала с высокой оценкой': {
                if(myProductReviews?.reviews?.length){
                    myProductReviews?.reviews!.sort((r1:any,r2:any) => {
                        if(r1.rating > r2.rating){
                            return -1
                        }
                        if(r1.rating < r2.rating){
                            return 1
                        }
                        return 0
                    })
                }
                break;
            }
            case 'Сначала с низкой оценкой': {
                if(myProductReviews?.reviews?.length){
                    myProductReviews?.reviews!.sort((r1:any,r2:any) => {
                        if(r1.rating < r2.rating){
                            return -1
                        }
                        if(r1.rating > r2.rating){
                            return 1
                        }
                        return 0
                    })
                }
                break;
            }
            default: {
    
            }
        }
    }
    
    const [searchParams] = useSearchParams();
    const idProduct = Number(searchParams.get('id'));

    const dispatch = useDispatch()
    useEffect(() => {
        if(!productReviews || productReviews.productId !== idProduct){
            dispatch<any>(setReviews(idProduct))
        }
        
    }, [])

    changeSorting();

    const onChangeSelectedSorting = (event: SelectChangeEvent) => {
        setSelectedSorting(event?.target.value);
        changeSorting();
    }

    let myRating = 0;
    let countRatings = [0,0,0,0,0];
    if(productReviews?.reviews){
        productReviews?.reviews?.forEach((r) => {
            countRatings[r.rating-1] = countRatings[r.rating-1]+1;
            myRating+=r.rating;
        })
        myRating /= productReviews?.reviews.length;
        myRating = parseFloat(myRating.toFixed(1));
    }    

    const toggleOpenImage = (imageURL: string) => {
        openedImage ? setOpenedImage('') : setOpenedImage(imageURL);
    }

    return (
        <Box sx={{ height: '100vh' }}>
            {
                openedImage
                && <ImageViewer imageURL={openedImage} closeImage={toggleOpenImage} />
            }
            <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{width: '70%'}}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} >
                        Отзывы и вопросы о товаре
                    </Typography>
                    <Box>
                        <Tabs value={0}>
                            <Tab label="Отзывы о товаре" />
                            <Tab label="Вопросы и ответы о товаре" />
                        </Tabs>
                    </Box>
                    <Box sx={{ paddingTop: '10px', width: '55%', display: 'flex', justifyContent: 'space-between' }}>
                        <Select value={selectedSorting} onChange={onChangeSelectedSorting} size="small" sx={{ width: '300px' }}>
                            <MenuItem value="Сначала новые">
                                Сначала новые
                            </MenuItem>
                            <MenuItem value="Сначала полезные">
                                Сначала полезные
                            </MenuItem>
                            <MenuItem value="Сначала с высокой оценкой">
                                Сначала с высокой оценкой
                            </MenuItem>
                            <MenuItem value="Сначала с низкой оценкой">
                                Сначала с низкой оценкой
                            </MenuItem>
                        </Select>
                        <FormControlLabel
                            control={<Checkbox 
                                checked={onlyPhoto}
                                onChange={() => setOnlyPhoto(!onlyPhoto)} />}
                                label="Только с фото" />

                    </Box>
                    <Divider sx={{ paddingTop: '10px' }} />
                    {
                        myProductReviews?.reviews
                            ? onlyPhoto
                                ? myProductReviews.reviews.map((pr, ind) =>
                                    pr.photosURL.length
                                        ? <ProductReview
                                            avatarURL={""}
                                            advantages={pr.advantages}
                                            disadvantages={pr.disadvantages}
                                            date={pr.writedDate}
                                            description={pr.description}
                                            helped={pr.helped}
                                            helpless={pr.helpless}
                                            isPrivate={pr.private}
                                            nickname={pr.nickname}
                                            photosURL={pr.photosURL}
                                            rating={pr.rating}
                                            onClickPhoto={toggleOpenImage}
                                        />
                                        : <></>)
                                : myProductReviews.reviews.map((pr, ind) =>
                                    <ProductReview
                                        avatarURL={""}
                                        advantages={pr.advantages}
                                        disadvantages={pr.disadvantages}
                                        date={pr.writedDate}
                                        description={pr.description}
                                        helped={pr.helped}
                                        helpless={pr.helpless}
                                        isPrivate={pr.private}
                                        nickname={pr.nickname}
                                        photosURL={pr.photosURL}
                                        rating={pr.rating}
                                        onClickPhoto={toggleOpenImage}
                                    />)
                            : <></>
                        
                    }
                </Box>
                <Box sx={{width: '25%'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Rating defaultValue={myRating} precision={0.1} size="large" readOnly />
                        <Typography variant="h5" sx={{fontWeight: 'bold'}}>{myRating}/5</Typography>
                    </Box>
                    <Divider sx={{paddingTop: '10px'}} />
                    <Box sx={{ paddingTop: '10px' }}>
                        <RatingReviewsProducts 
                            ratingName="5 звезд" 
                            countReviews={productReviews?.reviews!.length || 0} 
                            countRatingReviews={countRatings[4]} />
                        <RatingReviewsProducts 
                            ratingName="4 звезды" 
                            countReviews={productReviews?.reviews!.length || 0} 
                            countRatingReviews={countRatings[3]} />
                        <RatingReviewsProducts 
                            ratingName="3 звезды" 
                            countReviews={productReviews?.reviews!.length || 0} 
                            countRatingReviews={countRatings[2]} />
                        <RatingReviewsProducts 
                            ratingName="2 звезды" 
                            countReviews={productReviews?.reviews!.length || 0} 
                            countRatingReviews={countRatings[1]} />
                        <RatingReviewsProducts 
                            ratingName="1 звезда" 
                            countReviews={productReviews?.reviews!.length || 0} 
                            countRatingReviews={countRatings[0]} />
                    </Box>
                    <Button variant="contained" sx={{width: '100%', marginTop: '15px', borderRadius: '10px'}}>
                        Написать отзыв
                    </Button>
                </Box>

                
            </Container>
        </Box>
    );
}

export default ProductReviews;