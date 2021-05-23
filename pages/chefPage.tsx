import React from "react";
import HeroSection from "../Components/HeroSection";
import ChefInformation from "../Components/ChefInformation";
import ChefBio from "../Components/ChefBio";
import DishCard from "../Components/DishCard";
import { Layout, Col, Row } from "antd";
interface chefPageProps {}

const ChefPage: React.FC<chefPageProps> = ({}) => {
	const { Content } = Layout;
	return (
		<Layout>
			<Col xs={24} xl={24}>
				<Row>
					<HeroSection />
				</Row>
				<Row>
					<Col xs={0} xl={3}></Col>
					<Col xs={24} xl={18}>
						<Content style={{ padding: "0 50px" }}>
							<ChefInformation />
							<ChefBio />
						</Content>
					</Col>

					<Col xs={0} xl={3}></Col>
				</Row>

				<DishCard />
			</Col>
		</Layout>
	);
};

export default ChefPage;
