import {Route,Routes} from 'react-router-dom'
import Nav from "./components/Nav";
import Head from './components/Head';
import Home from "./components/Home";
import About from './components/About';

function App() {
  return (
    <div>
      <Nav/>
      <Head/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
