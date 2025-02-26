"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { PostCategories, PostCategoriesRecord } from "@/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PostCategory from "./PostCategory";

interface PostCategoriesSliderClientProps {
  slides: PostCategoriesRecord;
}

const SLIDES_GAP = 50;

export default function PostCategoriesSliderClient({
  slides,
}: PostCategoriesSliderClientProps) {
  return (
    <div className="relative w-full max-w-[1920px] mx-auto">
      <div className="swiper-button-prev !left-[-26px] text-black after:content-['prev'] after:text-2xl"></div>
      <div className="swiper-button-next !right-[-26px] text-black after:content-['next'] after:text-2xl"></div>
      <div className="swiper-pagination !top-[-72px] text-dark-blue"></div>
      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        spaceBetween={SLIDES_GAP}
        slidesPerView="auto"
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        className={`relative w-full pb-4`}
        grabCursor={true}
        simulateTouch={true}
        freeMode={true}
        mousewheel={true}
        touchStartPreventDefault={false}
        touchRatio={1}
      >
        {Object.entries(slides).map(([category, slide], index) => (
          <SwiperSlide key={index} className="sm:!w-auto">
            <PostCategory id={slide.id} category={category as PostCategories} />
          </SwiperSlide>
        ))}
        <div className="pointer-events-none sm:absolute 2xl:hidden top-0 right-0 z-10 w-[48px] h-full bg-gradient-to-l from-light-gray -to-transparent"></div>
      </Swiper>
    </div>
  );
}
