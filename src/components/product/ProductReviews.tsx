import { FunctionComponent, useState } from "react";
import { Box, Button, Checkbox, Container, Divider, FormControlLabel, IconButton, LinearProgress, Link, MenuItem, Rating, Select, SelectChangeEvent, Tab, Tabs, Typography } from "@mui/material";
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
import RatingReviewsProducts from "./RatingReviewsProduct";
import ProductReview from "./ProductReview";

interface ProductReviewsProps {

}

const ProductReviews: FunctionComponent<ProductReviewsProps> = () => {

    const [selectedSorting, setSelectedSorting] = useState('Сначала новые')

    const onChangeSelectedSorting = (event: SelectChangeEvent) => {
        setSelectedSorting(event?.target.value)
    }

    return (
        <Box sx={{ height: '100vh' }}>
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
                        <FormControlLabel control={<Checkbox />} label="Только с фото" />
                        
                    </Box>
                    <Divider sx={{ paddingTop: '10px' }} />
                    <ProductReview 
                        avatarURL={""}
                        advantages={"Все класс"}
                        disadvantages={"Все плохо"}
                        date={"9 Февраля 2022"}
                        description={"Могло быть лучше но все норм"}
                        helped={228}
                        helpless={13}
                        isPrivate={false}
                        nickname={"nickname"}
                        photosURL={[
                            "https://sun1.userapi.com/sun1-54/s/v1/if2/Nb16WG46cOmnZGwRyAUHziHFYEQEVW14MyrQJcXthI9GG5gMrzp9C1fUx-4AIZYv80BZJ_AgGgnIgwLFtOCbFS3B.jpg?size=993x992&quality=95&type=album",
                            "https://sun9-west.userapi.com/sun9-2/s/v1/if2/I2yTPM87mEWugcr3vOZ2a6qSGh-D20chWKAKjwJfYi4OCJCWxm4EZsLnvy93ChjErR9abGoGfHKcVO06TuUo1kNz.jpg?size=1170x1317&quality=95&type=album",
                            "https://sun1.userapi.com/sun1-96/s/v1/if2/dsAK8TqVC8XFCFI5gGgfd2UseV2saa9ldUb-er1o3zLocAKsMVHjrYPI-Ww3Zg9iNQjLmxoULvbV5FZyfFcVq3Mi.jpg?size=992x878&quality=96&type=album",
                            "https://sun9-north.userapi.com/sun9-84/s/v1/if2/2lCzbAA0Bnh5u-uJDOmy47GIEotNxQzbWOQpv0t-ymQELJ3gYTLf2CHyazDdOb3UYfhQZbfizel7o51cEJ-w_WI4.jpg?size=749x652&quality=95&type=album",
                            "https://sun9-north.userapi.com/sun9-77/s/v1/if2/X-ujG8lZIx1k1IK9adikOMDEY3DTVILiVRo4Ard84M2Kt5eCkIq9uRWudfxb_hCzrqcjWRpowI1XJKAd7TRrt_wc.jpg?size=564x564&quality=95&type=album",
                            "https://skl-trade.ru/d/w52p-600x600.png",
                            "https://evrostd.ru/upload/iblock/831/831886305758c746d712a2db16c0344a.png",
                            "https://домкомп.рф/upload/iblock/099/-gigaset-da510-.jpg",
                            "https://topsto-crimea.ru/images/detailed/5037/1632733126.9146.jpg"
                        ]}
                        rating={4}
                    />
                </Box>
                <Box sx={{width: '25%'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Rating defaultValue={2.7} precision={0.1} size="large" readOnly />
                        <Typography variant="h5" sx={{fontWeight: 'bold'}}>4.9/5</Typography>
                    </Box>
                    <Divider sx={{paddingTop: '10px'}} />
                    <Box sx={{ paddingTop: '10px' }}>
                        <RatingReviewsProducts ratingName="5 звезд" countReviews={200} countRatingReviews={35} />
                        <RatingReviewsProducts ratingName="4 звезды" countReviews={200} countRatingReviews={50} />
                        <RatingReviewsProducts ratingName="3 звезды" countReviews={200} countRatingReviews={20} />
                        <RatingReviewsProducts ratingName="2 звезды" countReviews={200} countRatingReviews={40} />
                        <RatingReviewsProducts ratingName="1 звезда" countReviews={200} countRatingReviews={55} />
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