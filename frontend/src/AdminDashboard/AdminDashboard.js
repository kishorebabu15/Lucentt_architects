import { Routes, Route, useNavigate, Redirect, Navigate } from 'react-router-dom';
import CreateClients from '../Clients/CreateClients';
import DisplayClients from '../Clients/DisplayClients';
import CreateProjects from '../CreateProjects/CreateProjects';
import OnGoingProjects from '../OnGoingProjects/OnGoingProjects';
import CompletedProjects from '../CompletedProjects/CompletedProjects';
import Timelines from '../TimeLines/TimeLines';
import Expenses from '../Expenses/Expenses';
import Payments from '../Payments/Payments';

import './AdminDashboard.css' ;

export default function Sections() {

    const navigate = useNavigate();

    const navigateToCreateClients = () => { navigate('/CreateClients') };
    const navigateToDisplayClients = () => { navigate('/DisplayClients'); }
    const navigateToCreateProjects = () => { navigate('/CreateProjects'); }
    const navigateToOnGoingProjects = () => { navigate('/OnGoingProjects') };
    const navigateToCompletedProjects = () => { navigate('/CompletedProjects') };
    const navigateToTimelines = () => { navigate('/Timelines') };
    const navigateToExpenses = () => { navigate('/Expenses') };
    const navigateToPayments = () => { navigate('/Payments') };
    

    return (
        <div>
            <div className="top-buttons">
                <button className="top-btn top-btn__CreateClients" onClick={navigateToCreateClients}>CreateClients</button>
                <button className="top-btn top-btn__DisplayClients" onClick={navigateToDisplayClients}>DisplayClients</button>
                <button className="top-btn top-btn__CreateProjects" onClick={navigateToCreateProjects}>CreateProjects</button>
                <button className="top-btn top-btn__OnGoingProjects" onClick={navigateToOnGoingProjects}>OnGoing Projects</button>
                <button className="top-btn top-btn__CompletedProjects" onClick={navigateToCompletedProjects}>Completed Projects</button>
                <button className="top-btn top-btn__TimeLines" onClick={navigateToTimelines}>TimeLines</button>
                <button className="top-btn top-btn__Expenses" onClick={navigateToExpenses}>Expenses</button>
                <button className="top-btn top-btn__Payments" onClick={navigateToPayments}>Payments</button>

                <Routes>
                    <Route path="/createClients" element={<CreateClients />} />
                    <Route path="/displayClients" element={<DisplayClients />} />
                    <Route path="/createProjects" element={<CreateProjects />} />
                    <Route path="/onGoingProjects" element={<OnGoingProjects />} />
                    <Route path="/completedProjects" element={<CompletedProjects />} />
                    <Route path="/timelines" element={<Timelines />} />
                    <Route path="/expenses" element={<Expenses />} />
                    <Route path="/payments" element={<Payments />} />
                </Routes>
            </div>
        </div>
    );
}

