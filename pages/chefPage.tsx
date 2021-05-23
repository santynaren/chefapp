import React from "react";
import HeroSection from "../Components/HeroSection";
import ChefInformation from "../Components/ChefInformation";
import ChefBio from "../Components/ChefBio";
import DishCard from '../Components/DishCard';
interface chefPageProps {}

const ChefPage: React.FC<chefPageProps> = ({}) => {
	return (
		<>
			<HeroSection />
			<ChefInformation />
			<ChefBio />
            <DishCard/>
		</>
	);
};

export default ChefPage;
