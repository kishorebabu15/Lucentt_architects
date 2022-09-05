import { Routes, Route, useNavigate } from 'react-router-dom';
import Clients from '../clients/clients'

export default function Sections() {

    const navigate = useNavigate();

    const navigateToClients = () => { navigate('/Clients') };
    const navigateToOnGoingProjects = () => { navigate('/Clients') };
    const navigateToCompletedProjects = () => { navigate('/Clients') };
    const navigateToTimelines = () => { navigate('/Clients') };
    const navigateToExpenses = () => { navigate('/Clients') };

    return (
        <div>
            <div>
                <button onClick={navigateToClients}>Clients</button>
                <button onClick={navigateToOnGoingProjects}>OnGoing Projects</button>
                <button onClick={navigateToCompletedProjects}>Completed Projects</button>
                <button onClick={navigateToTimelines}>TimeLines</button>
                <button onClick={navigateToExpenses}>Expenses</button>

                <Routes>
                    <Route path="/Clients" exact element={<Clients />} />
                </Routes>
            </div>
        </div>
    );
}

