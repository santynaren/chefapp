import "../styles/globals.css";
import "antd/dist/antd.css";
import {Header} from "../Components/Header";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
