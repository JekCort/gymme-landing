import React from 'react';
import {workouts} from "../data";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

import 'swiper/css'
import 'swiper/css/navigation'
import '../workoutSlider.css'

const WorkoutSlider = () => {
    const {programs} = workouts

    return <Swiper slidesPerView={2} spaceBetween={32} navigation={true}
                   breakpoints={{
                       768: {
                           slidesPerView: 3,
                       },
                       1020: {
                           slidesPerView: 4,
                       }
                   }}
                   modules={[Navigation]}
                   className='workoutSlider'
    >
        {programs.map((program, idx) => {
            const {image, name} = program
            return (
                <SwiperSlide className='max-w-[320px] max-h-[320px] relative' key={idx}>
                    <img className='w-full h-full object-cover' src={image} alt="workoutSlider image"/>
                    <div
                        className='absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex item-center rounded-[1px]'>
                        <div className='font-primary font-semibold text-sm text-neutral-500'>{name}</div>
                    </div>
                </SwiperSlide>)
        })}
    </Swiper>;
};

export default WorkoutSlider;
