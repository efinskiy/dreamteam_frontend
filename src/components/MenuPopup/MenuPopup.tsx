import Popup from 'reactjs-popup';
import { FC, useState } from 'react';
import css from './MenuPopup.module.css';
import 'reactjs-popup/dist/index.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { CrossIcon } from '@/components/Icons/CrossIcon.tsx';
import { classNames } from '@telegram-apps/sdk-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import styled from 'styled-components';

interface IFullScreenPopup {
    isOpen: boolean;
    setOpen: (x: boolean) => void;
    menuItems: string[];
}

const StyledPopup = styled(Popup)`
    &-overlay {
    }

    &-content {
        width: 100vw;
        height: 100vh;
        padding: 0;
    }
`;

export const MenuPopup: FC<IFullScreenPopup> = (p) => {
    const onClose = () => p.setOpen(false);
    const [menuItems] = useState<string[]>(p.menuItems);
    const [currentImage, setCurrentImage] = useState(menuItems[0]);

    return (
        <StyledPopup open={p.isOpen} onClose={onClose} position={'top center'}>
            <div className={css.popup}>
                <div className={css.content}>
                    <div className={css.header}>
                        <span className={css.headerTitle}>МЕНЮ</span>
                        <RoundedButton
                            icon={<CrossIcon size={44} color={'black'} />}
                            bgColor={'var(--primary-background) !important'}
                            action={() => onClose()}
                        />
                    </div>
                    <div className={css.imageViewer}>
                        <div
                            className={classNames(
                                css.bgImage,
                                css.currentImage
                            )}
                            style={{
                                backgroundImage: `url(${currentImage})`,
                            }}
                        ></div>
                        <div className={css.imageSelector}>
                            <Swiper
                                slidesPerView="auto"
                                modules={[FreeMode]}
                                freeMode={true}
                            >
                                {menuItems.map((slide) => (
                                    <SwiperSlide
                                        style={{ width: '100px' }}
                                        key={slide}
                                        onClick={() => {
                                            setCurrentImage(slide);
                                            console.log(slide);
                                        }}
                                    >
                                        <div
                                            className={classNames(
                                                css.bgImage,
                                                css.slideImage,
                                                css.slideImageCurrent
                                                    ? currentImage == slide
                                                    : null
                                            )}
                                            style={{
                                                backgroundImage: `url(${slide})`,
                                            }}
                                        ></div>
                                    </SwiperSlide>
                                ))}
                                <SwiperSlide
                                    style={{ width: '100px' }}
                                ></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </StyledPopup>
    );
};
