"use client";

import { Card } from "flowbite-react";

type PropsType = {
  title: string;
  image: string;
  price: number;
  onClick?: () => void;
};

export default function CardProduct({
  title,
  image,
  price,
  onClick,
}: PropsType) {
  return (
    <>
        <div className="flex justify-center ">
            <Card onClick={onClick} className="max-w-sm cursor-pointer" renderImage={() => (
                <img src={image} className="h-[200px] w-[60px] flex"/>
            )}
            >
            <a href="#">
                <h5 className="line-clamp-1 text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
                </h5>
            </a>
            <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white text-center flex">
                ${price}
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white text-center flex ">
                    <button className="bg-blue-500 w-[25px] h-[20px]"><a href="" className="text-blue-500">View Detail</a></button>
                </span>
            </div>
            </Card>
        </div>
        
    </>
    
  );
}
