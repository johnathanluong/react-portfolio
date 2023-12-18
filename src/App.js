import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contacts';
import Portfolio from './components/Portfolio';
import PortItem from './components/Portfolio/portItem';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element = {<Home />} />
        <Route path="about" element = {<About />} />
        <Route path="contact" element = {<Contact />} />
        <Route path="portfolio" element = {<Portfolio />} />
        <Route path="portfolio/:item" element = {<PortItem />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
