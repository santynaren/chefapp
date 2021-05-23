import React from "react";
import HeroSection from "../Components/HeroSection";
import ChefInformation from "../Components/ChefInformation";
import ChefBio from "../Components/ChefBio";
import DishCard from "../Components/DishCard";
import Link from "next/link";
import { Layout, Col, Row, Button } from "antd";
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
				
					<Col xs={24} xl={24}>
						<Content style={{ padding: "0 50px" }}>
							<ChefInformation />
							<ChefBio />
						</Content>
					</Col>

					
				</Row>

				<DishCard />
			</Col>
			<Row>
				<Col xs={0} xl={8}></Col>
				<Col xs={24} style={{ marginTop: "20px", textAlign: "center" }} xl={8}>
					<Link href='/Schedule'>
						<Button type='primary'>Update my Schedule</Button>
					</Link>
				</Col>

				<Col xs={0} xl={8}></Col>
			</Row>
		</Layout>
	);
};

export default ChefPage;
