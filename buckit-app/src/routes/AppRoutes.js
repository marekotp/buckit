import { Routes, Route } from 'react-router-dom';
import Subscriptions from '../pages/SubscriptionsPage';
import Login from '../components/UserLoginAndRegistration/Login';
import SignUp from '../components/UserLoginAndRegistration/SignUp';

export const AppRoutes = (props) => {

    return (
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/signup' element={<SignUp />} />

            <Route path='/subscriptions/:user_id/:token' element={<Subscriptions />} />

        </Routes>
    )
};