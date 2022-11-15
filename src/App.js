import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <h1>Ok</h1>
      <button className='btn btn-secondary'>Button</button>
      <Routes>
        <Route path='/' element={<Home />}>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
