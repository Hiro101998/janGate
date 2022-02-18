import React, { FC, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Scrollbar, Keyboard } from "swiper";
import { Box, Image, Button, Text } from "@chakra-ui/react";
import { Section2Lesson1ImgageSrc } from "../slide/imageSrc/section2/lesson1";

export const SimpleSlider: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      m={"5%"}
      bg={"blue.100"}
    >
      <Swiper
        navigation
        pagination={{ clickable: true }}
        keyboard={true}
        modules={[Navigation, Pagination, Scrollbar]}
        className="mySwiper"
        scrollbar={{ draggable: true }}
      >
        {Section2Lesson1ImgageSrc.map((item) => {
          return (
            <SwiperSlide key={item.page}>
              <Image
                src={item.src}
                alt="資料"
                textAlign={"center"}
                height={"50%"}
                width={"60%"}
                m="auto"
              />
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <Box
            textAlign={"center"}
            height={"50%"}
            width={"75%"}
            m="auto"
            pt={200}
          >
            <Text fontSize={40}>
              レクチャーはここまでです。
              <br />
              練習問題にチャレンジしよう！！
            </Text>
            <Button size="lg" mt={5} bg={"teal.300"} color={"white"}>
              練習問題へ
            </Button>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
