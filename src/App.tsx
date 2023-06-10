import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';

import { Header } from './components';
import { Home, Game } from './pages';
import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header />
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/:title'} element={<Game />} />
            </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
