import React from "react";
import { Layout, Button, Tag, Menu, Modal, Row, Col, Typography } from "antd";
import Head from "next/head";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
	const { Header, Content, Footer } = Layout;
	return (
		<>
			<Head>
				<title>Cheffy</title>
				<meta
					name='keywords'
					content='Cheffy,Chef in Virginia, Best Chef in State, Best Chef in City'
				/>
			</Head>
			<Header style={{ backgroundColor: "white" }} className='header'>
				<Menu theme='light' mode='horizontal' defaultSelectedKeys={["2"]}>
					<Menu.Item key='1'>
						{" "}
						<img src='https://cheffy.us/images/logo.png' />
					</Menu.Item>
				</Menu>
			</Header>
		</>
	);
};
