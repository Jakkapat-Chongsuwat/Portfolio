"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
  iconstyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconstyles?: string;
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconstyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconstyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
