"use client"
import React from 'react';
import { DirectionAwareHoverDemo } from './img';

const RentalOffer = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center p-6 bg-white shadow-md rounded-md">
     
      <div className="lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
      <DirectionAwareHoverDemo/>
      </div>
      <div className="lg:w-1/2 justify-center">
        <p className="px-10 py-5 mb-4 text-3xl text-center text-black">
          Торговый центр Добрыня, расположенный в самом сердце района Кукковка, приглашает вас арендовать помещения как внутри здания, так и на прилегающей территории. Мы тщательно рассмотрим вашу заявку, учтем особенности вашего бизнеса и ваши пожелания, чтобы предложить оптимальное место для аренды.
        </p>
        <p>
          Наши отношения с клиентами строятся на доверии и партнерстве. Мы всегда выполняем свои обязательства и стремимся к взаимовыгодному сотрудничеству. С нетерпением ждем возможности работать с вами!
        </p>
      </div>
    </div>
  );
};

export default RentalOffer;