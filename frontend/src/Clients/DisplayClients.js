import { useState, useEffect } from 'react';
import Axios from "axios";
import './DisplayClients.css';

const DisplayClients = () => {

    const [ListOfClients, setListOfClients] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/getClients`).then((response) => {
            setListOfClients(response.data);
        });
    }, []);

    return (
        <div>
            {ListOfClients.map((client) => {
                return (
                    <div>
                        <h1>Name : {client.name}</h1>
                    </div>
                );
            })}
        </div>
    )
}

export default DisplayClients;
