import { NewsStoriesElement } from '@/components/NewsStories/NewsStoriesElement/NewsStoriesElement.tsx';

import css from './NewsStories.module.css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const NewsStories = () => {
    return (
        <div className={css.newsSlider}>
            <Swiper
                slidesPerView={3.8}
                modules={[FreeMode]}
                freeMode={true}
                spaceBetween={0}
            >
                <SwiperSlide>
                    <NewsStoriesElement />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsStoriesElement />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsStoriesElement />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsStoriesElement />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsStoriesElement />
                </SwiperSlide>
                {/*
                    Пустой слайд для корректного отображения последнего слайда
                */}
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </div>
    );
};
