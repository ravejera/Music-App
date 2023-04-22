import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../services/apollo-client";
import LeftMenu from "@/components/left/LeftMenu";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <main>
        <div className="App">
          <LeftMenu />
          <Component {...pageProps} />
          <div className="background"></div>
        </div>
      </main>
    </ApolloProvider>
  );
}
