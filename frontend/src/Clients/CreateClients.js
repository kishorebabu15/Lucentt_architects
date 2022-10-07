import { useState } from "react";
import Axios from "axios";

import './CreateClients.css';



const CreateClients = () => {

    const [ListOfClients, setListOfClients] = useState([]);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState("");
    const [client_address, setClient_address] = useState("");
    const [site_information, setSite_information] = useState("");

    const createClient = (event) => {
        Axios.post(`http://localhost:8000/api/createClient`, {
            name,
            phone,
            email,
            client_address,
            site_information,
        }).then((response) => {
            setListOfClients([...ListOfClients, {
                name,
                phone,
                email,
                client_address,
                site_information,
            }]);
        });

        event.preventDefault();
    };

    return (
        <div >


            <form className="form__client-details" onSubmit={createClient}>

                <input
                    type="text"
                    required="required"
                    placeholder="Enter name"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />

                <input
                    type="number"
                    required="required"
                    placeholder="Enter 10 digit Mobile no."
                    onChange={(event) => {
                        setPhone(event.target.value);
                    }} />

                <input
                    type="email"
                    required="required"
                    placeholder="Enter email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />

                <input
                    type="text"
                    required="required"
                    placeholder="Enter Client Address"
                    onChange={(event) => {
                        setClient_address(event.target.value);
                    }}
                />

                <input
                    type="text"
                    required="required"
                    placeholder="Enter Site Information"
                    onChange={(event) => {
                        setSite_information(event.target.value);
                    }}
                />

                <input type="submit" value="CreateClient" />

            </form>

        </div>
    );
}

export default CreateClients;
