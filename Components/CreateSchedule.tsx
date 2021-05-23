import React from "react";
import { Typography, Button, Checkbox, TimePicker } from "antd";
import styles from "../styles/Stylesheet.module.css";
interface CreateScheduleProps {}

const CreateSchedule: React.FC<CreateScheduleProps> = ({}) => {
	const { Title } = Typography;
	const CheckboxGroup = Checkbox.Group;
	const plainOptions = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	return (
		<>
			<Title level={3}>Add your new Schedule</Title>
            <br/>
			<div className={styles.slotDays}>
				<CheckboxGroup
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
					}}
					options={plainOptions}
				/>
				<br />
				<TimePicker.RangePicker />
				<br />
				<Button type='primary'>Add new Schedule</Button>
			</div>
		</>
	);
};
export default CreateSchedule;