
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
          <div className="container">
            <Routes> {/*In react-router-dom v6, "Switch" is replaced by routes "Routes".*/}
              <Route exact path = "/" element = {<ListEmployeeComponent/>}/>
              <Route path = "/employees" element = {<ListEmployeeComponent/>}/>
              <Route path = "/add-employee" element = {<CreateEmployeeComponent/>}/>
              <Route path = "/update-employee/:id" element = {<CreateEmployeeComponent/>}/>
            </Routes>
          </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
