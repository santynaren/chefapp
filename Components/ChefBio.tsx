import React from "react";
import { Collapse, Row, Col } from "antd";
import styles from "../styles/Stylesheet.module.css";
import AvailabilityIndex from "./AvailablityIndex";
interface ChefBioProps {}

const ChefBio: React.FC<ChefBioProps> = ({}) => {
	const { Panel } = Collapse;
	return (
		<Row style={{ marginTop: "20px" }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
			<Col xs={24} xl={12}>
				<Row>
					<div className={styles.backgroundCard}>
						<Collapse ghost>
							<Panel header='About Dorian' key='1'>
								<div className={styles.bioInfo}>
									Dorian was shown to be one of the strongest and most talented
									home cooks of the season due to her passion and determination.
									In the kitchen, she generally very consistent in both
									individual and team challenges, never placing herself in the
									bottom. However, she was also known for being very emotional.
									She had a short temper and sometimes broke into tears, most
									memorably during the Tag Team Elimination Challenge with
									Subha. Despite that, she showed that she could produce dishes
									well under pressure. Because of this she was seen as a
									front-runner, and eventually went on to win the competition.
								</div>
							</Panel>
						</Collapse>
					</div>
					<div className={styles.backgroundCard}>
						<Collapse ghost>
							<Panel header='Dorian Special Cusines' key='1'>
								<div className={styles.bioInfo}>
									<ul>
										<li>American</li>
										<li>Italian</li>
										<li>Carribean</li>
										<li>Indian</li>
									</ul>
								</div>
							</Panel>
						</Collapse>
					</div>
				</Row>
			</Col>
			<AvailabilityIndex />
		</Row>
	);
};

export default ChefBio;
