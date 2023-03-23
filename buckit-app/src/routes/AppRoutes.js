import { Routes, Route } from 'react-router-dom';
import UserDashboard from '../pages/UserDashboard';
import Subscriptions from '../pages/SubscriptionsPage';

export const AppRoutes = (props) => {
    return (
        <Routes>
            <Route exact path='/' element={<UserDashboard />} />

            <Route path='/subscriptions' element={<Subscriptions />} />

        </Routes>
    )
};