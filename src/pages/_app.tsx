import { type AppType } from "next/dist/shared/lib/utils";
import { Provider } from "~/contextAPI/context";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (<Provider>
    <Component {...pageProps} />
  </Provider>);
};

export default MyApp;
