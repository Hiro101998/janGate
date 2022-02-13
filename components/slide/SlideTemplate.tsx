import React, { FC, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import { Box, Button, Stack, Text } from "@chakra-ui/react";

const testArr = [
  { number: 1, main: "aaa" },
  { number: 2, main: "iii" },
];

export const SimpleSlider: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      h={"500"}
      m={20}
    >
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testArr.map((item) => {
          return (
            <SwiperSlide key={item.number}>
              <Text textAlign={"center"}>{item.main}</Text>
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <Text textAlign={"center"}>レクチャーはここまで。</Text>
          <Text textAlign={"center"}>練習問題にチャレンジしよう！！</Text>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={4}
          >
            <Button textAlign={"center"}>練習問題へ</Button>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
