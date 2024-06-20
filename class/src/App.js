import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routing/AppRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <AppRoutes></AppRoutes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
