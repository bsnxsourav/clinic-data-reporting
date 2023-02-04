import { useState } from "react";
import { Link } from "react-router-dom";

const AddPatient = () => {
    const [success, setSuccess] = useState();
    const handleSubmit = e => {
        e.preventDefault();
        // console.log('Form submitted');
        // console.log(e.target.firstName.value);
        // console.log(e.target.lastName.value);
        // console.log(e.target.email.value);
        // console.log(e.target.age.value);

        fetch("http://localhost:8080/patients", {
        method: "POST",
        body: JSON.stringify({
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            emailId: e.target.email.value,
            age: e.target.age.value,
        }),
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(res => {
            if (res.status === 200) {
                console.log('Posted Patient.');
                setSuccess(true);
            } else {
                setSuccess(false);
            }
        })
        .catch(err => console.log(err));
    }

    const renderResponseMessage = () => {
        if (success === true) {
            return (
                <div className="alert alert-success m-3" role="alert">
                    Added patient.
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
        <div className="add-patient-page container w-50 mx-auto">

            {renderResponseMessage()}

            <form onSubmit={handleSubmit}>
                <div className="row m-4">
                    <p className="text-center display-6">Add Patient</p>
                </div>
                <div className="row mt-1">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name: </label>
                            <input type="text" className="form-control" id="firstName" placeholder="John"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name: </label>
                            <input type="text" className="form-control" id="lastName" placeholder="Doe"/>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-8">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address: </label>
                            <input type="email" className="form-control" id="email" placeholder="john.doe@company.com"/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age: </label>
                            <input type="text" className="form-control" id="age" placeholder="25"/>
                        </div>
                    </div>
                </div>

                <div className="row mt-1 text-center">
                    <button type="submit" className="btn btn-link">Submit</button>
                    <button type="button" className="btn btn-link"><Link to="/">Back</Link></button>
                </div>
            </form>
        </div>
    );
}
 
export default AddPatient;