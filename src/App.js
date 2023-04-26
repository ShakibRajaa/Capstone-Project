import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Page2 from './components/secondPage/Page2';
import Form from './components/firstPage/Form';
import Banner from './components/firstPage/Banner';
import cardData from './components/secondPage/cardData';
import Page3 from './components/thirdPage/Page3';
import Page4 from './components/fourthPage/Page4';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<div className='First'><Banner/><Form/></div>}/>
          <Route path='page2' element={<Page2 details={cardData}/>}/>
          <Route path='page3' element={<Page3/>}/>
          <Route path='page4' element={<Page4/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
