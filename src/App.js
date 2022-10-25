import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Income from './Pages/Income';
import Expenses from './Pages/Expenses';
import Reports from './Pages/Reports';
import Profile from './Pages/Profile';
import AddIncome from './Pages/AddIncome';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="reports" element={<Reports />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addincome" element={<AddIncome />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
