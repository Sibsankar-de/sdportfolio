import './App.css';
import './css/navBar.style.css';
import './css/home.style.css';
import './css/aboutPage.style.css';
import './css/skillPage.style.css';
import './css/projectPage.style.css';
import './css/servicePage.style.css';
import './css/utils.css';
import './css/root.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Route, Routes, useLocation } from 'react-router-dom';

import { Navbar } from './components/navbar';
import { ErrorPage } from './components/errorPage';
import { Main } from './components/main';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
      {useLocation().pathname === '/' && <footer><Footer /></footer>}
    </>
  );
}

export default App;
