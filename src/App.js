
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage';
import InfoPage from './pages/InfoPage';
import Navbar from './components/Navbar';
import Movies from './pages/Movies';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route index element={<Homepage />} />
          <Route path='/infopage/:id' element={<InfoPage />} />
          <Route path='/movies' element={<Movies />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
