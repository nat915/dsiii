import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/Visits" element={<Visits />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
