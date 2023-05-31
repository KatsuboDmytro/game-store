import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Provider } from 'react-redux';
import { store } from './redux';
import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header />
            <Routes>
              <Route path={'/'} element={<Home />} />
            </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
