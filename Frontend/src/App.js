import { Route, Routes } from "react-router-dom"
import HomePage from './Pages/HomePage';
import './App.css';
import AddPatient from "./Pages/AddPatient";
import AddRecord from "./Pages/AddRecord";
import ReportPage from "./Pages/ReportPage";
import SPCDisplay from "./Components/SampleComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/add-record" element={<AddRecord />} />
        <Route path="/show-report" element={<ReportPage />} />
        <Route path="/spc" element={<SPCDisplay />} />
      </Routes>
      
    </div>
  );
}

export default App;
