import { Box, Button, Checkbox, FormControlLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { FunctionComponent, useRef, useState } from "react";
import Products from '../../infos/products.json';

const RandomTextGenerator=require("random-text-generator");

interface WorkbenchProps {

}

const Workbench: FunctionComponent<WorkbenchProps> = () => {
    const colors = new Map([
        ["Бежевый", "f5f5dc"],
        ["Белый", "ffffff"],
        ["Бирюзовый", "30d5c8"],
        ["Бордовый", "9b2d30"],
        ["Бронза", "cd7f32"],
        ["Голубой", "42aaff"],
        ["Желтый", "ffff00"],
        ["Зеленый", "008000"],
        ["Золотой", "ffd700"],
        ["Коралловый", "ff7f50"],
        ["Красный", "ff0000"],
        ["Кремовый", "fdf4e3"],
        ["Лазурный", "007fff"],
        ["Лиловый", "db7093"],
        ["Медь", "b87333"],
        ["Оранжевый", "ffa500"],
        ["Перламутровый", "5725FE"],
        ["Разноцветный", "FE2589"],
        ["Розовый", "ffc0cb"],
        ["Салатовый", "99ff99"],
        ["Синий", "0000ff"],
        ["Сиреневый", "c8a2c8"],
        ["Фиолетовый", "8b00ff"],
        ["Фуксия", "f754e1"],
        ["Хаки", "806b2a"],
        ["Черно-серый", "23282b"],
        ["Черный", "000000"],
        ["Шоколадный", "d2691e"]
    ])


    const productId = Products[Products.length - 1].id + 1;

    const refName = useRef(null);
    const refPrice = useRef(null);
    const refPriceWithoutDiscount = useRef(null);
    const refisBestSeller = useRef(null);
    const refCountBonuses = useRef(null);
    const refAverageDateDelivery = useRef(null);
    const refPhotos = useRef(null);
    const refWeight = useRef(null);
    const refRating = useRef(null);
    const refReviews = useRef(null);
    const refCountOrders = useRef(null);
    const refColors = useRef(null);
    const refMaker = useRef(null);
    const refDescription = useRef(null);
    const refCategory = useRef(null);
    const refConfigs = useRef(null);

    const createdFile = () => {
        let names:string[] = [];
        let settingsNames={
            tries: 80, 
            safeMode: true, 
            forceCombiningOrigins: false, 
            minLength: 5, 
            maxLength: 12, 
            deepness: 40, 
            trust: 2, 
            weightsLeft: {}, 
            weightsRight: {}, 
            splitter: "", 
            startingCharacter: String.fromCharCode(2), 
            endingCharacter: String.fromCharCode(3), 
        };
        let randomName = new RandomTextGenerator(settingsNames);
        let usernamesExample = [
            "Бебра",
            "Виталий К.",
            "Настя",
            "Жаба Толстая",
            "Злая зая",
            "Кирилл",
            "Ванюша",
            "Кот в сапогах",
            "Тень",
            "Василий Рокер ",
            "Николай Э.",
            "Огурчик соленный",
            "Певец ртом",
            "Жанна В.",
            "Кексик",
            "Артур Жвачков",
            "Маша",
            "Аким Качек",
            "Никита",
            "Орлов",
            "Айгиз Искужин",
            "Алькор",
            "Дешевые Ванные",
            "Не завезли",
            "Фотоаппарат Никон",
            "Пятерочка Магазин",
            "Вампир кровососик",
            "Плаза сайтик"
        ];
        for (let username of usernamesExample) randomName.learn(username);
        for (let i=0; i<15; ++i) {
            let username=randomName.generate();
            names.push(username)
        }

        type productReviewType = {
            avatarURL: string | null,
            nickname: string,
            advantages: string,
            disadvantages: string,
            description: string,
            color: string,
            rating: number,
            photosURL: string[],
            date: string,
            helped: number,
            helpless: number,
            private: false
        }

        const adv = [
            "Увлажняет, нейтральный слабый запах",
            "Не особо блестит ",
            "против обветривания очень хорошо подходит, губы не сушит и после некоторого времени использовпния лечат их",
            "все ок",
            "Цена и размер дисплея",
            "их нет",
            "Не так много",
            "Хороший телефон за свои деньги",
            "Недорогой, быстрый.",
            "компактный",
            "мне понравился. был бы чуть короче было бы супер. на рост 160 длинный ",
            "Рубашка приятная к телу. На размер 46 села хорошо. Не просвечивает.",
            "приятная ткань, не просвечивает, на 44размер немного свободна"
        ]

        const disadv = [
            "нет",
            "их много",
            "все отлично",
            "мнётся, но это проблема хлопка",
            "Ткань очень мнется и по швам кое-где торчали нитки",
            "звук отстой",
            "Не обнаружили ",
            "могло быть лучше",
            "Недостатков для такого смартфона нет",
            "озу 2 гб!!! продавец уверял,что у данной модели 3гб, брешет,не верьте!!",
            "батарею держит плохо",
            "Больше особенность чем недостаток - очень маркий, т.к матовое покрытие экрана, пластиковый корпус (но о каком метале идёт речь за 11к?). ",
            "в правой части монитора приоделённых цветах он мигает .После 2х мемяцев работы просто перестал включаться, идёт загрузка xiaomi пишет нет сигнала и просто потухает экран.",
            "Не нашла"
        ]

        const descript = [
            "Для работы с документами, верстки отличный вариант монитора. На столе занимает мало места за счет того что очень плоский. ",
            "покупкой довольна. и геншин, и апекс и даже малышка фазма очень радуют качеством картинки ",
            "Довольны, советую.",
            "Качество товара хорошее, ещё не пробывал в работе!!!  ",
            "В целом - отличная тарелка  ",
            "Купила для первого блюда",
            "покупала ребенку для первых блюд. подошла идеально. для взрослого, думаю, будет маловата.",
            "за 2к для вида норм и чтобы время посмотреть . Если хотите функционал лучше взял хонор 5 или ми 5.",
            "Рекомендую. ",
            "часики супер лёгкие удобные",
            "Удобно",
            "дешево",
            "красиво",
            "смотрится ништяк"
        ]

        const photos = [
            "https://cdn1.ozone.ru/s3/rp-photo-1/wc800/6f79f93b-2775-4d6c-b19f-c16176c8f918.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-4/wc800/fdf5594c-71e6-486b-bd7f-0b1a8e05eb49.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-5/wc800/853517d9-d3ef-4d25-beb1-a9771cd8609b.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-4/wc800/7ae41090-d1ca-4d13-b8f9-39583981c25c.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-2/wc800/870d9713-4e13-4ecf-8a24-2abba5612255.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-2/wc800/cd44e06d-2113-498c-85fc-d413a3a48b2a.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-3/wc800/6ca21cb5-79e3-4a5e-a7d3-c5685dd52b33.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-4/wc800/0384f0d2-67ae-4b0e-8ca3-7216d793cf30.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-4/wc800/6b80c6de-29cc-41d8-a3fc-f26663df5ea0.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-1/wc800/18638d3b-a0b1-4194-b308-35a0c2723ac5.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-3/wc800/ba9f8f4c-58d3-4b64-8c8c-c3b0a477e7b5.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-1/wc800/5758c479-ea1f-498e-b3af-ceb6050d94be.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-5/wc800/13e186a4-98f1-4825-90de-f4c188076136.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-1/wc800/3598d0c1-1977-4c83-a993-6e92a884847c.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-3/wc800/8792abcc-9200-4b42-9f22-4f0059efa8b8.jpeg",
            "https://cdn1.ozone.ru/s3/rp-photo-5/wc800/2a424c79-375c-435d-ba68-e22a514e056a.jpeg"
        ]

        const dates = [
            "02.03.2022",
            "13.08.2021",
            "13.09.2021",
            "12.03.2021",
            "18.11.2021",
            "05.03.2021",
            "08.07.2022",
            "27.02.2021",
            "16.04.2021",
            "11.06.2021",
            "08.11.2021",
            "29.06.2021",
            "18.06.2022",
            "07.12.2021"
        ]

        let reviews:productReviewType[] = [];

        function getRandomInt(max:number) {
            return Math.floor(Math.random() * max)+1;
        }

        for(let i = 0; i < getRandomInt(20); i++){
            const tempPhotos = [];
            for(let k = 0; k < getRandomInt(6); k++){
                tempPhotos.push(photos[getRandomInt(photos.length)])
            }
            reviews.push({
                avatarURL: null,
                nickname: names[getRandomInt(names.length)],
                advantages: adv[getRandomInt(adv.length)],
                disadvantages: disadv[getRandomInt(disadv.length)],
                description: descript[getRandomInt(descript.length)],
                color: "Белый",
                rating: getRandomInt(6),
                photosURL: tempPhotos,
                date: dates[getRandomInt(dates.length)],
                helped: getRandomInt(70),
                helpless: getRandomInt(30),
                private: false
            })
        }

        console.log(JSON.stringify(reviews))

        const productName = refName.current;
        const productPrice = refPrice.current;
        const productPriceWithoutDiscount = refPriceWithoutDiscount.current;
        const productisBestSeller = refisBestSeller.current;
        const productCountBonuses = refCountBonuses.current;
        const productAverageDateDelivery = refAverageDateDelivery.current;
        let productPhotos = String(refPhotos.current).split(',');
        const productWeight = refWeight.current;
        const productIsFavorite = false;
        const productRating = refRating.current;
        const productReviews = reviews;
        const productCountOrders = refCountOrders.current;
        const productColors = String(refColors.current).split(',');
        const productMaker = refMaker.current;
        const productDescription = refDescription.current;
        const productCategory = String(refCategory.current).split(',');
        const productConfigs = String(refConfigs.current).split(',');

        const createdProduct = {
            "id": productId,
            "name": productName,
            "price": productPrice,
            "priceWithoutDiscount": productPriceWithoutDiscount,
            "isBestSeller": productisBestSeller,
            "countBonuses": productCountBonuses,
            "averageDateDelivery": productAverageDateDelivery,
            "photosURL": productPhotos,
            "weight": productWeight,
            "isFavorite": false,
            "rating": productRating,
            "countOrders": productCountOrders,
            "reviews": productReviews, ///
            "colors": productColors,
            "maker": productMaker,
            "productDescription": productDescription,
            "category": productCategory,
            "configs": productConfigs
        }
    }

    return (
        <Box sx={{ paddingTop: '150px' }}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Box sx={{
                    margin: '25px',
                    padding: '10px'
                }}>
                    <Typography>{productId}</Typography>
                    <TextField fullWidth ref={refName} placeholder="Название" size="small" />
                    <TextField fullWidth ref={refPrice} placeholder="Цена" size="small" />
                    <TextField fullWidth ref={refPriceWithoutDiscount} placeholder="Цена без скидки" size="small" />
                    <FormControlLabel control={<Checkbox ref={refisBestSeller} defaultChecked />} label="Бестселлер" />
                    <TextField fullWidth ref={refCountBonuses} placeholder="Количество бонусов" size="small" />
                    <TextField fullWidth ref={refAverageDateDelivery} placeholder="Среднее время доставки" size="small" />
                    <TextField fullWidth ref={refPhotos} placeholder="Ссылки на фото (через запятую)" size="small" />
                    <Select>
                        <MenuItem>
                            Электроника
                        </MenuItem>
                        <MenuItem>
                            Компьютеры
                        </MenuItem>
                        <MenuItem>
                            Бытовая техника
                        </MenuItem>
                        <MenuItem>
                            Одежда и обувь
                        </MenuItem>
                        <MenuItem>
                            Спорт
                        </MenuItem>
                    </Select>
                    <TextField fullWidth ref={refWeight} placeholder="Вес" size="small" />
                    <TextField fullWidth ref={refCountOrders} placeholder="Количество заказов" size="small" />
                    <TextField fullWidth ref={refColors} placeholder="Цвета через запятую" size="small" />
                    <TextField fullWidth ref={refConfigs} placeholder="Конфигурация через запятую" size="small" />
                    <TextField fullWidth ref={refMaker} placeholder="Производитель" size="small" />
                    <TextField fullWidth ref={refRating} placeholder="Рейтинг" size="small" />
                    <TextField fullWidth ref={refDescription} multiline placeholder="Описание" size="small" />
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ marginTop: '25px' }}
                        onClick={createdFile}>
                        Создать товар
                    </Button>
                </Box >
            </Container>
        </Box>
    );
}

export default Workbench;