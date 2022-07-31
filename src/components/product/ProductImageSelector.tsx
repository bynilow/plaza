import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, IconButton } from "@mui/material";
import { FunctionComponent, useRef, useState } from "react";

interface ProductImageSelectorProps {
    photos: string[];
    changeSelectedPhoto: (ind: number) => void;
}

const ProductImageSelector = ({ photos, changeSelectedPhoto }: ProductImageSelectorProps) => {
    const photosT = [
        "https://mobicom-m.ru/image/cache/catalog/products/xiaomi/redmi9a/redmi9ablack-1000x1340.jpg",
        "https://khv.radioluch.ru/upload/iblock/8c9/8c981abf30e6fe2ed9e10e13e8058c6f.jpg",
        "https://playgame34.ru/wp-content/uploads/2020/07/Xiao-Mi-Mi-10-Pro-IMAK-3D.jpg",
        "https://tehnoteca.ru/img/1660/1659531/xiaomi_redmi_8a_32gb_2gb_1.jpg",
        "https://avatars.mds.yandex.net/get-mpic/4401552/img_id77292842238875453.jpeg/orig",
        "https://kemerovo.diamondelectric.ru/images/3458/3457720/smartfon_xiaomi_redmi_k20_664gb_1.jpg",
        "https://bemart.ru/images/bemart/pp/1598274497_662_1280.jpeg",
        "https://penza.amazingame.ru/upload/iblock/52d/j67f9a_1_2_1.jpg",
        "https://ae04.alicdn.com/kf/Hc5ab3ecd8cab4a8aba382ba052c6022dX/Xiaomi-Redmi-9C-NFC-3-64.jpg",
        "https://sotstore.ru/image/cache/catalog/torg/172-400x400.jpg"
    ];

    const [activeImage, setActiveImage] = useState<number>(0);
    const refImages = useRef<HTMLElement>(null);

    const onClickTop = () => {
        refImages.current!.scrollTo(0, refImages.current!.scrollTop - 70);
    }
    const onClickBottom = () => {
        refImages.current!.scrollTo(0, refImages.current!.scrollTop + 70);
    }
    const onClickImage = (event: React.MouseEvent<HTMLElement>, index: number) => {
        refImages.current!.scrollTo(0, index * 50);
        setActiveImage(index);
        changeSelectedPhoto(index);
    }



    return (
        <Box sx={{
            width: '100px',
            maxHeight: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <IconButton onClick={onClickTop}>
                <ExpandLessIcon />
            </IconButton>
            <Box
                ref={refImages}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '100%',
                    alignItems: 'center',
                    height: '100%',
                    overflow: 'scroll',
                    overflowY: 'hidden',
                    overflowX: 'hidden'
                }}>
                {
                    photos.map((i, ind) =>
                        <Button
                            onClick={e => onClickImage(e, ind)}
                            key={ind}
                            sx={
                                ind === activeImage
                                    ? {
                                        marginTop: '10px',
                                        minWidth: '70px',
                                        minHeight: '70px',
                                        padding: '10px',
                                        border: '2px solid blue',
                                        borderRadius: '10px',
                                        background: 'url(' + i + ')',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }
                                    : {
                                        marginTop: '10px',
                                        minWidth: '70px',
                                        minHeight: '70px',
                                        background: 'url(' + i + ')',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }
                            } />)
                }
            </Box>
            <IconButton onClick={onClickBottom}>
                <ExpandMoreIcon />
            </IconButton>
        </Box>
    );
}

export default ProductImageSelector;