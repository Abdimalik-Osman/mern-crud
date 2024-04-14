
import EmployeeRegistration from './components/Employee';
import { Route, Routes }  from 'react-router-dom';
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path='/' element={<EmployeeRegistration />}/>
      </Routes>
    </div>
  );
}

export default App;
