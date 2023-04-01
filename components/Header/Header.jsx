import React , { useState , useEffect } from 'react'
import NavItems from '@/Constants/NavItems'
import Modal from '../Modal';
import { useSelector , useDispatch } from 'react-redux';
import Icon from '../Icons';
import { deleteUser } from '@/Redux/Auth/AT';

const Header = () => {
    const dispatch = useDispatch(deleteUser)
    const user = useSelector(state => state.userData.user);
    const loginState = useSelector(state => state.userData.loginStatus);

    const [ showModal , setShowModal ] = useState(false);
    const [ loginStatus , setLoginStatus ] = useState(false);

    return (
        <div className='w-full h-[12vh] bg-white fixed top-0 left-0 px-4'>
            <div className="flex justify-between items-center w-full h-full">
                <div className='border-2 border-black w-36 h-16'>

                </div>
                <div className="flex flex-row justify-center items-center gap-6">
                    {NavItems.map((item , key) => (
                        <div key={key} className='flex flex-col gap-y-1 p-1 hover:cursor-pointer hover:scale-110 transition-all duration-300 rounded'>
                            <span className="text-xl text-black tracking-wide font-medium ">{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className='relative flex flex-col justify-between items-center gap-x-5 p-3 group'>
                    <div className={`w-fit px-5 h-10 flex justify-center items-center ${loginState ? 'bg-sky-700/20' : 'bg-amber-700/20'} transition-all duration-300 rounded-md group-hover:scale-110`}>
                        <div>
                            {loginState ?
                                <button>
                                    {console.log("Login")}
                                    <span className='text-md font-medium '>{user.username}</span>
                                </button> : <button onClick={()=> {
                                    setShowModal(!showModal)
                                }}>
                                    {console.log("Logout")}
                                    <span className='text-md font-medium '>Login</span>
                                </button>}
                        </div>
                    </div>
                    <div className="absolute w-full rounded top-14 overflow-hidden bg-white p-2">
                        {loginState && <div className="w-full h-0 group-hover:h-10 bg-slate-50 rounded-md flex flex-row justify-around items-center overflow-hidden transition-all duration-300 hover:cursor-pointer" onClick={() => {dispatch(deleteUser())}}>
                            <div>
                                <Icon.LogoutIcon className={`text-gray-600`} />
                            </div>
                            <div>
                                <span className='text-md font-medium text-gray-500 tracking-wide Capitalize'>Logout</span>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <Modal.Auth loginStatus={loginStatus} setLoginStatus={setLoginStatus} setShowModal={setShowModal} showModal={showModal} />
        </div>
    )
}

export default Header