import logo from './logo.svg';
import './App.css';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import CreateCustomer from './CreateCustomer';
import GetCustomer from './GetCustomer';
import EditCustomer from './EditCustomer';

function App() {
  return (
    <div >
      <h1>Welcome to  Our Shopping Application</h1>
      <Router>
        <Routes>
          <Route path="/" element={<CreateCustomer />} />
          <Route path="/get" element={<GetCustomer />} />
          <Route path="/edit/:id" element={<EditCustomer />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
