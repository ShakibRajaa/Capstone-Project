import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Category from './components/secondPage/Category';
import Form from './components/REGISTRATION/Form';
import Banner from './components/REGISTRATION/Banner';
import cardData from './components/secondPage/cardData';
import Page3 from './components/HOME/Home';
import Page4 from './components/HOMETIMER/HomeWithTimer';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<div className='First'><Banner/><Form/></div>}/>
          <Route path='page2' element={<Category details={cardData}/>}/>
          <Route path='page3' element={<Page3/>}/>
          <Route path='page4' element={<Page4/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
