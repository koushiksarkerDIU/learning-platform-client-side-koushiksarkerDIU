import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import DarkModeToggle from "react-dark-mode-toggle";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    // console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // console.log('logout successfully');
            })
            .catch((error) => {
                console.error(error);
            })
    }
    return (
        <div className="navbar bg-blue-500 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-500 text-white rounded-box w-52">
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link>Blogs</Link></li>
                        <li><Link>FAQ</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                    </span> Mr School</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link>Blogs</Link></li>
                    <li><Link>FAQ</Link></li>
                </ul>
            </div>
            <div className='navbar-end'>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} >
                        <div className="w-10 rounded-full">
                            {
                                user?.photoURL ?
                                    <img className='' style={{ height: '50px', width: '50px', border: '1px solid white', borderRadius: '50%' }} src={user.photoURL} alt="" /> :
                                    <FaUser></FaUser>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content  bg-gray-300 text-black rounded-box w-52">
                        {
                            user?.uid ? <>
                                <li><span>{user?.displayName}</span></li>
                                <li><span onClick={handleLogOut}>Log Out</span></li>
                            </> : <>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <div>
                <DarkModeToggle
                    onChange={setIsDarkMode}
                    checked={isDarkMode}
                    size={50}
                />
            </div>
        </div>
    );
};

export default Header;
