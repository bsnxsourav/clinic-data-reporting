const PatientDisplay = ({ patient }) => {
    return (
        <div className="patient-display">
            <div className="row text-center m-4">
                <div className="col display-6">Patient</div>
            </div>
            <div className="row mb-3 border-bottom">
                <div className="col lead"><strong>Patient:</strong> {patient.firstName} {patient.lastName}</div>
            </div>
            <div className="row mb-3 border-bottom">
                <div className="col lead"><strong>Age:</strong> {patient.age}</div>
            </div>
            <div className="row mb-3 border-bottom">
                <div className="col lead"><strong>Email:</strong> {patient.emailId}</div>
            </div>
        </div>
    );
}
 
export default PatientDisplay;