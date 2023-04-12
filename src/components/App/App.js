import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home';
import Proposals from '../../pages/Proposals/Proposals';
import AddProposal from '../../pages/AddProposal/AddProposal';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/proposals' element={<Proposals />}></Route>
      <Route path='/add-proposal' element={<AddProposal />}></Route>
    </Routes>
    </div>
  );
}

export default App;
