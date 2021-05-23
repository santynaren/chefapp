import React from 'react'
import styles from "../styles/Stylesheet.module.css";
import { dishes } from "../Helpers/Constants";
import { AiFillFire } from "react-icons/ai";
import { Layout, Tag, Modal, Row, Col, Typography } from "antd";
interface DishCardProps {

}

 const DishCard: React.FC<DishCardProps> = ({}) => {
    const { Content } = Layout;
	const { Title } = Typography;
        return (	<div className={styles.dishesDisplay}>
            <div className={styles.section}>
                {dishes.map((val, idx) => {
                    return (
                        <div className={styles.dishCard}>
                            <div>
                                <img className={styles.dishImage} src={val.dishImage} />
                            </div>
                            <div className={styles.dishInfo}>
                                <Row>
                                    <div className={styles.dishName}>
                                        <Title level={4}>{val.dishName}</Title>
                                    </div>
                                </Row>
                                <Row>
                                    <div className={styles.dishCusine}>
                                        <span>{val.dishCusine}</span>
                                        <span>
                                            {val.dishSpice === "High" ? (
                                                <>
                                                    {" "}
                                                    <AiFillFire />
                                                    <AiFillFire />
                                                    <AiFillFire />
                                                </>
                                            ) : (
                                                <>
                                                    {" "}
                                                    <AiFillFire />
                                                    <AiFillFire />
                                                </>
                                            )}
                                        </span>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>);
}

export default DishCard;