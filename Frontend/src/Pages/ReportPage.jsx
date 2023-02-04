import { useLocation, Link } from "react-router-dom";
import PatientDisplay from "../Components/PatientDisplay";
import WeightDisplay from "../Components/WeightDisplay";
import BPDisplay from "../Components/BPDisplay";

const ReportPage = () => {
    const {state} = useLocation();
    const { patient } = state; // Read values passed on state
    return (
        <div className="report-page container w-50 mx-auto">
            <PatientDisplay patient={patient.patient} />
            <WeightDisplay records={patient.weightRecords}/>
            <BPDisplay records={patient.bpRecords}/>
            <div className="text-center">
                <button type="button" className="btn btn-link"><Link to="/">Back</Link></button>
            </div>
        </div>
    );
}
 
export default ReportPage;