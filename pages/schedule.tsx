import React from "react";
import CreateSchedule from "../Components/CreateSchedule";
import ScheduleSlots from "../Components/ScheduleSlots";
import { Layout, Col, Row, Button } from "antd";
interface IScheduleProps {}

const Schedule: React.FC<IScheduleProps> = ({}) => {
	const { Content } = Layout;
	return (
		<>
			<Layout>
				<Col xs={24} xl={24}>
					<Row>
						<Col xs={0} xl={3}></Col>
						<Col xs={24} xl={18}>
							<Content style={{ padding: "0 50px", marginTop: "20px" }}>
								<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
									<Col xs={24} xl={12}>
										<ScheduleSlots />
									</Col>
									<Col xs={24} xl={12}>
										<CreateSchedule />
									</Col>
								</Row>
							</Content>
						</Col>

						<Col xs={0} xl={3}></Col>
					</Row>
				</Col>
			</Layout>
		</>
	);
};

export default Schedule;
