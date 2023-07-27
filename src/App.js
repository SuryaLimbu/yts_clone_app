
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage';
import InfoPage from './pages/InfoPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route index element={<Homepage />} />
          <Route path='/infopage' element={<InfoPage />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
