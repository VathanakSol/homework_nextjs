"use client";
import CardProduct from "@/component/card/CardProduct";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://fakestoreapi.com/products/";

export default function Service() {
	const [products, setProducts] = useState([]);
	const router = useRouter();

	useEffect(() => {
		fetch(ENDPOINT)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	
	return (
		<div className="h-[100vh] w-[100vw] mt-4 container mx-auto grid grid-cols-4 grid-flow-row gap-4 overflow-y-auto scrollbar-track-gray-200">
			{products.map((product: any, index) => (
				<CardProduct
					onClick={() => router.push(`/product/${product.id}`)}
					key={index}
					title={product.title}
					image={product.image}
					price={product.price}
				/>
			))}
		</div>
	);
}
