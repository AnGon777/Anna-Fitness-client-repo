
import { createBrowserRouter } from 'react-router-dom';

import Main from '../Layout/Main';
import ReviewUpAdd from '../Pages/Private/ReviewUpAdd';
import UpdateFormRev from '../Pages/Private/UpdateFormRev';
import UserReviews from '../Pages/Private/UserReviews';
import Home from '../Pages/Public/Home';
import ProgramDetails from '../Pages/Public/HomeComponents/Details/ProgramDetails';
import Login from '../Pages/Shared/Login';
import Register from '../Pages/Shared/Register';
import Private from './Private';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/program/:id',
                element: <ProgramDetails></ProgramDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/program/${params.id}`)
            },
            {
                path: '/reviews/:id',
                element: <Private><ReviewUpAdd></ReviewUpAdd></Private>,
                loader: ({params}) => fetch(`http://localhost:5000/program/${params.id}`)
            },
            {
                path: '/userReview',
                element: <Private><UserReviews></UserReviews></Private>
            },
            {
                path: '/updateForm/:id',
                element: <Private><UpdateFormRev></UpdateFormRev></Private>,
                loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
                
            },
        ]
    }
])



export default router;