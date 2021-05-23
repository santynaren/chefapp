import React from "react";
import { Layout, Tag, Modal, Row, Col, Typography } from "antd";
import {
	SmileTwoTone,
	setTwoToneColor,
	TrophyTwoTone,
} from "@ant-design/icons";
import styles from "../styles/Stylesheet.module.css";
interface ChefInformationProps {}

const ChefInformation: React.FC<ChefInformationProps> = ({}) => {
	const { Content } = Layout;
	const { Title } = Typography;
	setTwoToneColor("#EB3943");
	const [videoModal, setVideoModal] = React.useState(false);
	return (
		<Content>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col xs={24} xl={4} className='gutter-row'>
					<div className={styles.displayPictureSection}>
						<div
							onClick={() => setVideoModal(true)}
							className={styles.statusVideo}
						>
							<img
								style={{ width: "100%", height: "100%" }}
								src='https://parade.com/wp-content/uploads/2019/09/MC-S10_Dorian_0519_3.jpg'
							/>
						</div>
					</div>
				</Col>
				<Col xs={24} xl={6} className={styles.nameInfo}>
					<Title level={1}>Dorian Hunter</Title>
					<Tag color='green'>Available for New Order</Tag>
				</Col>
				<Col xl={14}>
					<br />
					<div className={styles.statsCard}>
						<Row>
							<Col xs={12}>
								<Row>
									<Col xl={4} xs={6}>
										<TrophyTwoTone style={{ fontSize: "26px" }} />
									</Col>
									<Col xl={20} xs={18}>
										<Row>
											<Col xs={24} xl={4}>
												<Title level={3}>23</Title>
											</Col>
											<Col xs={24} xl={20}>
												<Title level={5}>Years of Experience</Title>
											</Col>
										</Row>
									</Col>
								</Row>
							</Col>
							<Col xs={12}>
								<Row>
									<Col xl={4} xs={6}>
										<SmileTwoTone style={{ fontSize: "26px" }} />
									</Col>
									<Col xl={20} xs={18}>
										<Row>
											<Col xs={24} xl={5}>
												<Title level={3}>150</Title>
											</Col>
											<Col xs={24} xl={19}>
												<Title level={5}>Tastebuds Enlighited</Title>
											</Col>
										</Row>
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
				</Col>
				<Col xs={0} xl={2} className='gutter-row' span={4}></Col>
			</Row>
			<Modal
				centered
				visible={videoModal}
				onOk={() => setVideoModal(false)}
				onCancel={() => setVideoModal(false)}
			>
				<iframe
					width='100%'
					height='400'
					src='https://www.youtube.com/embed/4SAd9bY6zdA'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</Modal>
		</Content>
	);
};

export default ChefInformation;
