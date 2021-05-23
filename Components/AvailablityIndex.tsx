import React from "react";
import {
	Col,
	Typography,
} from "antd";
import styles from "../styles/Stylesheet.module.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { availableTime } from "../Helpers/Constants";
interface AvailablityIndexProps {}

 const AvailablityIndex: React.FC<AvailablityIndexProps> = ({}) => {
	const [count, setCount] = React.useState(0);
	const { Title } = Typography;
	return (
		<Col xs={24} xl={12}>
			<div className={styles.availablityIndex}>
				<LeftOutlined
					onClick={() => (count !== 0 ? setCount(count - 5) : null)}
				/>
				<div className={styles.itemsCard}>
					{availableTime.slice(count, count + 5).map((val, idx) => {
						return (
							<div className={styles.availablityCard}>
								<div className={styles.availablityImage}>
									<Title level={3} className={styles.availablityText}>
										{val.date.slice(0, 2)}
									</Title>
								</div>
								<div>
									<b>{val.date.slice(2)}</b>
								</div>
								<div>
									<i>{val.available ? "Free" : "booked"}</i>
								</div>
							</div>
						);
					})}
				</div>

				<RightOutlined onClick={() => setCount(count + 5)} />
			</div>
		</Col>
	);
};
export default AvailablityIndex;