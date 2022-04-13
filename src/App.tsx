
import {useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import NewsList from "./components/Pages/NewsList";
import {NewsPage} from "./components/Pages/NewsPage";
import {Login} from "./components/Pages/Login";
import {SignUp} from "./components/Pages/SignUp";
import {CreateNews} from "./components/Pages/CreateNews";
import TribeLogo from "./assets/SVGs/TribeLogo.svg";
import {useLogout} from "./hooks/useLogout";
import {useAuthMember} from "@tribeplatform/react-sdk/hooks";
import {getAccessToken} from './service/Index'
function App() {

    const logout = useLogout()
    const {data: user} = useAuthMember()
    const [isActive, setActive] = useState<boolean>(false)

    const handleMenuToggle = () => {
        setActive(!isActive);
       
    };
     const hideMenu = () => {
        setActive(!isActive);
    };  



    console.log('===================>', user)
    return (
        
        <>
       
         <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-2">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <span className="flex items-center py-4 px-2 mt-1">
                                <img width={80} className="mr-2" src={TribeLogo}  alt="Tribe Logo" title="Tribe Logo" />
                            </span>
                        </div>
                        {user && (
                               <div className="hidden md:flex items-center space-x-1">
                               <Link to="/NewsList" className="py-4 px-2 text-[#777] font-semibold ">News feed</Link>
                           </div>
                            )}                      
                    </div>
                    {!user && (
                                <div className="hidden md:flex items-center space-x-3 ">
                                    <Link to="/" className="py-2 px-6 font-medium text-white bg-green-500 rounded-lg hover:bg-green-400 transition duration-300">Login</Link>
                                    <Link to="/signup" className="py-1.5 px-5 font-medium text-[#777] bg-white border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-white transition duration-300">Sign Up</Link>
                                </div>
                            )}
                    {user && (
                            <div className="hidden md:flex items-center space-x-3 ">
                                <Link to="/CreateNews" className="py-2 px-6 font-medium text-white bg-green-500 rounded-lg hover:bg-green-400 transition duration-300">Create News</Link>
                                <span className="py-2 px-2 relative text-gray-500 rounded" >
                                        Hello, {user?.name?.split(" ")[0]}
                                </span>
                                <span className='cursor-pointer' onClick={() => logout()}>Ignore logout</span>
                            </div>)} 
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={handleMenuToggle}>
                        <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                            x-show="!showMenu"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor" >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    </div>
                </div>
            </div>
            <div className={`${isActive ? 'block':'hidden' }`}>
                <ul className="">
                   {user && (<>
                    <li><Link onClick={hideMenu} to="/NewsList" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">News feed</Link></li>
                    <li><Link onClick={hideMenu} to="/CreateNews"   className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Create News</Link></li>
                   </>)} 
                   {!user && (<>
                    <li><Link onClick={hideMenu} to="/"    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Login</Link></li>
                    <li><Link onClick={hideMenu} to="/signup"   className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Sign Up</Link></li>
                   </>)} 
                </ul>
            </div>
        </nav>
             <Routes>    
                {!user && (<>
                 <Route path="/"    element={<Login/>}/>   
                 <Route path="/signup"   element={<SignUp/>}/>
                </>)}
                <Route path="/NewsList" element={<NewsList />} />              
                <Route path="/:NewsId"  element={<NewsPage />} />
                <Route path="/CreateNews"   element={<CreateNews />}/ >  
            </Routes> 
        </>
    );
}
export default App;