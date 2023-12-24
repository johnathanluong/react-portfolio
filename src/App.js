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
      <Route path="/" strict element={<Layout />}>
        <Route path="" strict element = {<Home />} />
        <Route path="about" strict element = {<About />} />
        <Route path="contact" strict element = {<Contact />} />
        <Route path="portfolio" strict element = {<Portfolio />} />
        <Route path="portfolio/:item/" strict element = {<PortItem />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
