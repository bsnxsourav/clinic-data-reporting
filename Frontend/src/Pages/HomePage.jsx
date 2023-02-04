import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PatientListItem from "../Components/PatientListItem";

const HomePage = () => {

    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/patients')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPatients(data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    return (

        
        <div className="home-page">
            {loading ? <h1>Loading</h1> : (
                <div className="container w-50 mx-auto">
                    <div className="patient-list">
                        <div className="row text-center my-3">
                           <div className="col-12 display-6">PATIENTS</div>
                        </div>
                        {patients.map(patient => <PatientListItem key={patient.id} patient={patient}/>)}
                    </div>
                    <div className="add-patient text-center mt-4">
                        <button type="button" className="btn btn-link"><Link to="/add-patient">Add Patient</Link></button>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default HomePage;