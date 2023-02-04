import { useNavigate } from "react-router-dom";

const PatientListItem = ({ patient }) => {
    const navigate = useNavigate();

    const addRecordHandler = () => {
        navigate('/add-record', { state: { patient: patient } });
    };

    const showReporthandler = () => {
        fetch(`http://localhost:8080/patient/${patient.id}`)
        .then(res => res.json())
        .then(data => {
            console.log('fetched data', data);
            navigate('/show-report', { state: { patient: data } });
        })
        .catch(err => console.log(err));        
    };

    return (
        <div className="patient-list-item row border-bottom">
            <p className="lead m-0 pt-3 col-5">{patient.firstName} {patient.lastName}</p>
            <p className="lead m-0 pt-3 col-2">{patient.age}</p>
            <button type="button" className="btn btn-link lead m-0 pt-3 col-3" onClick={addRecordHandler}>Add Data</button>
            <button type="button" className="btn btn-link lead m-0 pt-3 col-2" onClick={showReporthandler}>Report</button>
        </div>
    );
}
 
export default PatientListItem;