import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Category from './components/secondPage/Category';
import Form from './components/REGISTRATION/Form';
import Banner from './components/REGISTRATION/Banner';
import cardData from './components/secondPage/cardData';
import Home from './components/HOME/Home';
import HomeTimer from './components/HOMETIMER/HomeWithTimer';
import Movie from './components/MOVIE/Movie';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<div className='First'><Banner/><Form/></div>}/>
          <Route path='category' element={<Category details={cardData}/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='hometimer' element={<HomeTimer/>}/>
          <Route path='movie' element={<Movie/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
