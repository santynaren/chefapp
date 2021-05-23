import React from 'react'
import styles from '../styles/Stylesheet.module.css'
interface HeroSectionProps {

}

 const HeroSection: React.FC<HeroSectionProps> = ({}) => {
        return (<>
        <div className={styles.heroImage} />
        </>);
}

export default HeroSection;