import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@elastic/eui/dist/eui_theme_light.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { EuiProvider } from '@elastic/eui';
// Pages
import PageHome from "./page/Home";
import PageBackBone from './page/BackBone';
import PageSite from './page/Site';

// Configure the Apollo Client
const client = new ApolloClient({
  uri: 'https://demo.nautobot.com/api/graphql/',
  headers: {
    'Authorization': `Token aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <EuiProvider colorMode="light">
        <Router>
          <Routes>
            <Route exact path="/" element={<PageHome />} />
            <Route path="/topology/site" element={<PageSite />} />
            <Route path="/topology/backbone" element={<PageBackBone />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </EuiProvider>
    </ApolloProvider>
  )
}

const NotFound = () => {
  return <div>Not found</div>
}