import { BrowserRouter } from 'react-router';
import './App.css';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { MainHeader } from './Components/MainHeader';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Choukashi from './Components/Choukashi';
import FactoryManagers from './Components/FactoryManagers';

function App() {
  return (
    <>
      <>
        <BrowserRouter>
            <Routes>
              <>
                <Route path="/" element={<MainHeader />} >
                  <Route index path="/" element={<Home />}></Route>
                  <Route index path="/aboutus" element={<About />}></Route>
                  <Route index path="/factorymanagers" element={<FactoryManagers />}></Route>
                  <Route index path="/choukashi" element={<Choukashi />}></Route>
                  <Route index path="/contactus" element={<Contact />}></Route>
                </Route>
              </>
            </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;