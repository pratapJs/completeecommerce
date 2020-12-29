import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import Jumbotron from "../components/cards/Jumbotron";

const Home = () => {
	return (
		<>
			<div className="jumbotron text-danger h1 font-weight-bold text-center">
				<Jumbotron text={["Latest Products", "Best Sellers", "New Arrivals"]} />
			</div>
			<NewArrivals />
			<br />
			<br />
			<BestSellers />
		</>
	);
};

export default Home;
