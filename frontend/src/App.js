import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [ListOfClients, setListOfClients] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [client_address, setClient_address] = useState("");
  const [site_information, setSite_information] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:8000/getClients").then((response) => {
      setListOfClients(response.data);
    });
  }, []);

  const createClient = () => {
    Axios.post("http://localhost:8000/createClient", {
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
  };

  return (
    <div className="App">
      <div className="displayClients">
        {ListOfClients.map((client) => {
          return (
            <div>
              <h1>Name : {client.name}</h1>
            </div>
          );
        })}
      </div>

      <div className="">
        <input
          type="text"
          placeholder="Enter name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Enter Mobile no."
          onChange={(event) => {
            setPhone(event.target.value);
          }} />
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Client Address"
          onChange={(event) => {
            setClient_address(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Site Information"
          onChange={(event) => {
            setSite_information(event.target.value);
          }}
        />

        <button onClick={createClient}>Create Client</button>
      </div>
    </div>
  );
}

export default App;
