import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetailsCard from "../../Pages/CourseDetailsCard/CourseDetailsCard";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://learning-server-site-pearl.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <CourseDetailsCard></CourseDetailsCard>,
                loader: ({ params }) => fetch(`https://learning-server-site-pearl.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learning-server-site-pearl.vercel.app/checkout/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
        ]
    }
])