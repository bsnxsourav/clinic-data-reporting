
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import PatientDisplay from "../Components/PatientDisplay";
const AddRecord = () => {
    const {state} = useLocation();
    const { patient } = state; // Read values passed on state

    const [success, setSuccess] = useState();

    const addrecordsubmitHandler = e => {
        e.preventDefault();
        console.log(e.target.recordType.value);
        console.log(e.target.recordValue.value);

        fetch(`http://localhost:8080/records?patientId=${patient.id}`, {
        method: "POST",
        body: JSON.stringify({
            value: e.target.recordValue.value,
            type: e.target.recordType.value,
        }),
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(res => {
            if (res.status === 200) {
                console.log('Posted Record.');
                setSuccess(true);
            } else {
                setSuccess(false);
            }
        })
        .catch(err => console.log(err));

    };

    const renderResponseMessage = () => {
        if (success === true) {
            return (
                <div className="alert alert-success m-3" role="alert">
                    Added record.
                </div>
            );
        } else if (success === false) {
            return (
                <div class="alert alert-danger m-3" role="alert">
                    Something went wrong.
                </div>
            );
        } else {
            return <div></div>
        }
    }

    return (
        <div className="add-record-page container w-50 mx-auto">
            <PatientDisplay patient={patient} />

            <div className="patient-record mt-2">
                <form onSubmit={addrecordsubmitHandler}>
                    <div className="row text-center m-4">
                        <div className="col display-6 text-muted">Add Record</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 lead">Type: </div>
                        <div className="col-8">
                            <select id="recordType" className="form-select">
                                <option value="WEIGHT">Weight</option>
                                <option value="BP">Blood Pressure</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 lead">Value: </div>
                        <div className="col-8">
                            <input id="recordValue" type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        {renderResponseMessage()}
                        <button type="submit" className="btn btn-link">Submit</button>
                        <button type="button" className="btn btn-link"><Link to="/">Back</Link></button>
                    </div>
                </form>
            </div>



            {console.log(patient)}
        </div>
    );
}
 
export default AddRecord;