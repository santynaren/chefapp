import React from "react";
import { Typography, Button, Checkbox, TimePicker } from "antd";
import styles from "../styles/Stylesheet.module.css";

interface ScheduleSlotsProps {}

 const ScheduleSlots: React.FC<ScheduleSlotsProps> = ({}) => {
    const { Title } = Typography;
	return (
		<>
			<Title level={3}>Current Slots</Title>
			<div className={styles.slotCard}>
				<h3>Monday to Friday </h3>
                <h5>5 PM to 9 PM</h5>
			</div>
		</>
	);
};

export default ScheduleSlots;
