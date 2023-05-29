import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import './index.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
          <Routes>
            <Route path={'/'} element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
