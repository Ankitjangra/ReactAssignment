import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import ButtonComponent from './components/ButtonComponent';
import CounterComponent from './components/CounterComponent';
import AllItemsComponent from './components/AllItemsComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={< ButtonComponent />}></Route>
          <Route path='/counter' element={<CounterComponent />}></Route>
          <Route path='/items' element={<AllItemsComponent/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
