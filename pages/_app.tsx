import "../styles/globals.css";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { Header } from "../Components/Header";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	const { Footer } = Layout;
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer style={{ textAlign: "center" }}>
				Created with Love and Fooood by Narendra for cheffy
			</Footer>
		</>
	);
}
export default MyApp;
