import {Route,Routes} from 'react-router-dom'
import Nav from "./components/Nav";
import Head from './components/Head';
import Router1 from "./components/Router1";
import Router2 from "./components/Router2";

function App() {
  return (
    <div>
      <Nav/>
      <Head/>
      <Routes>
        <Route path="/r1" element={<Router1 />} />
        <Route path="/r2" element={<Router2 />} />
      </Routes>
    </div>
  );
}

export default App;
