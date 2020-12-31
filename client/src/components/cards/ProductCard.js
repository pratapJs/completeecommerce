import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import react from "../../images/react.jpeg";
import { Link } from "react-router-dom";
import { showAverage } from "../../helperFunctions/rating";

const { Meta } = Card;

const ProductCard = ({ product }) => {
	const { title, images, description, slug } = product;
	return (
		<>
			{product && product.ratings && product.ratings.length > 0 ? (
				showAverage(product)
			) : (
				<div className="text-center pt-1 pb-3"> No rating yet </div>
			)}
			<Card
				//className="mb-3"

				cover={
					<img
						alt="title"
						src={images && images.length ? images[0].url : react}
						className="p-1 "
						style={{ height: "200px", objectFit: "cover" }}
					/>
				}
				actions={[
					<Link to={`/product/${slug}`}>
						<EyeOutlined className="text-warning" />
						<br />
						View Product
					</Link>,
					<>
						{" "}
						<ShoppingCartOutlined className="text-danger" /> <br /> Add to cart{" "}
					</>,
				]}
			>
				<Meta
					title={title}
					description={`${description.substring(0, 50)}....`}
				/>
			</Card>
		</>
	);
};

export default ProductCard;
