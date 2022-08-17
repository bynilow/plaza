import { Avatar, Box, Button, ImageList, ImageListItem, Rating, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

interface ProductReviewProps {
    avatarURL: string;
    nickname: string;
    advantages: string;
    disadvantages: string;
    description: string;
    rating: number;
    photosURL: string[];
    date: string;
    helped: number;
    helpless: number;
    isPrivate: boolean;
    onClickPhoto: (url: string) => void;
}

const ProductReview = (
    { avatarURL, nickname, advantages, disadvantages, description, rating, photosURL, date, helped, helpless, isPrivate, onClickPhoto }
        : ProductReviewProps) => {
    return (
        <Box sx={{marginTop: '30px'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                        sx={{ width: 56, height: 56 }}
                        src={avatarURL}>
                        {nickname.charAt(0).toUpperCase()}
                    </Avatar>
                    <Typography sx={{ fontWeight: 'bold', paddingLeft: '15px' }}>{nickname}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ color: 'gray' }}>{date}</Typography>
                    <Rating readOnly value={rating} precision={0.1} sx={{ marginLeft: '15px' }} size="small" />
                </Box>
            </Box>
            <Box sx={{ background: '#f2f5f9', padding: '5px', display: 'flex', alignItems: 'center', borderRadius: '5px', marginTop: '15px' }}>
                <DoneIcon sx={{ width: '16px', marginRight: '5px', color: 'green' }} />
                <Typography sx={{ fontSize: '12px', display: 'inline', textAlign: 'left' }}>
                    Товар куплен на PLAZA
                </Typography>
            </Box>
            {
                advantages.length
                    ? <Box>
                        <Typography sx={{ fontWeight: 'bold', marginTop: '15px' }}>Достоинства</Typography>
                        <Typography sx={{ marginTop: '10px', fontSize: '14px' }}>{advantages}</Typography>
                    </Box>
                    : <></>
            }
            {
                disadvantages.length
                    ? <Box>
                        <Typography sx={{ fontWeight: 'bold', marginTop: '15px' }}>Недостатки</Typography>
                        <Typography sx={{ marginTop: '10px', fontSize: '14px' }}>{disadvantages}</Typography>
                    </Box>
                    : <></>
            }
            {
                description.length
                    ? <Box>
                        <Typography sx={{ fontWeight: 'bold', marginTop: '15px' }}>Комментарий</Typography>
                        <Typography sx={{ marginTop: '10px', fontSize: '14px' }}>{description}</Typography>
                    </Box>
                    : <></>
            }

            
            
            {
                photosURL.length
                    ? 
                    <ImageList variant="quilted" cols={3} gap={3} sx={{marginTop: '15px'}}>
                        {
                            photosURL.map((p, ind) =>
                                <ImageListItem key={ind} sx={{cursor: 'pointer'}} onClick={() => onClickPhoto(p)}>
                                    <img src={p} />
                                </ImageListItem>)
                        }
                    </ImageList>
                    : <></>
            }
            
            
            <Typography sx={{ color: 'gray', fontSize: '14px', marginTop: '15px', fontWeight: 'bold' }}>
                Вам помог этот отзыв?
            </Typography>
            <Box sx={{ display: 'flex', marginTop: '10px' }}>
                <Button size="small" sx={{ borderRadius: '10px' }}>
                    Да {helped}
                </Button>
                <Button size="small" sx={{ borderRadius: '10px' }}>
                    Нет {helpless}
                </Button>
            </Box>

        </Box>
    );
}

export default ProductReview;