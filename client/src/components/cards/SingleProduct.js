import React, { useState } from "react";
import { Card, Tabs } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import react from "../../images/react.jpeg";
import ProductListItems from "./ProductListItems";
import StarRatings from "react-star-ratings";
import RatingModal from "../modal/RatingModal";
import { showAverage } from "../../helperFunctions/rating";

const { TabPane } = Tabs;

const SingleProduct = ({ product, onStarClick, star }) => {
	//console.log(product.title);
	const { title, images, description, _id } = product;

	return (
		<>
			<div className="col-md-6">
				{images && images.length ? (
					<Carousel showArrows={true} autoPlay infiniteLoop>
						{images &&
							images.map((i) => (
								<img src={i.url} key={i.public_id} alt="product" />
							))}
					</Carousel>
				) : (
					<Card
						//className="mb-3"

						cover={
							<img
								alt="default product"
								src={react}
								className="mb-3 carousel-default-image"
							/>
						}
					/>
				)}
				<Tabs type="card">
					{" "}
					<TabPane tab="Description" key="1">
						{description && description}
					</TabPane>
					<TabPane tab="More" key="2">
						Call us on xxx xxx xxx to learn more about this product.
					</TabPane>
				</Tabs>
			</div>
			<div className="col-md-6">
				<h1 className="bg-info p-3">{title}</h1>
				{product && product.ratings && product.ratings.length > 0 ? (
					showAverage(product)
				) : (
					<div className="text-center pt-1 pb-3"> No rating yet </div>
				)}
				<Card
					actions={[
						<>
							<ShoppingCartOutlined className="text-success" /> <br />
							Add to Cart
						</>,
						<Link>
							{" "}
							<HeartOutlined className="text-info" /> <br /> Add to Wishlist
						</Link>,
						<RatingModal>
							<StarRatings
								name={_id}
								numberofStars={5}
								rating={star}
								changeRating={onStarClick}
								isSelectable={true}
								starRatedColor="red"
							/>
						</RatingModal>,
					]}
				>
					<ProductListItems product={product} />
				</Card>
			</div>
		</>
	);
};

export default SingleProduct;
