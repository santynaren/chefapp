import React from "react";
import HeroSection from "../Components/HeroSection";
import ChefInformation from "../Components/ChefInformation";
import ChefBio from "../Components/ChefBio";
interface chefPageProps {}

const ChefPage: React.FC<chefPageProps> = ({}) => {
	return (
		<>
			<HeroSection />
			<ChefInformation />
			<ChefBio />
		</>
	);
};

export default ChefPage;
