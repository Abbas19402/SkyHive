import React , { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux';

import { deleteUser } from '@/Redux/Auth/AT';
import Modal from '../Modal';
import Icon from '../Icons';
import NavItems from '@/Constants/NavItems'
import Link from 'next/link';
import { toast } from 'react-toastify'

const Header = () => {
    const dispatch = useDispatch(deleteUser);
    const user = useSelector(state => state.userData.user);
    const loginState = useSelector(state => state.userData.loginStatus);

    const [ showModal , setShowModal ] = useState(false);
    const [ loginStatus , setLoginStatus ] = useState(false);
    const [ showSidebar , setShowSidebar ] = useState(false);

    return (
        <div className='w-full h-[12vh] bg-white fixed top-0 left-0 px-4'>
            <div className="flex justify-between items-center w-full h-full">
                <Link href={'/'}>
                    <div className='w-36 h-16 flex justify-center items-center'>
                        <span className="text-4xl tracking-wider">SkyHive</span>
                    </div>
                </Link>
                <div className="hidden lg:flex flex-row justify-center items-center gap-6">
                    {NavItems.map((item , key) => (
                        !user.isAdmin && item.name == 'Panel' ? <Link href={`${item.href}`} key={key} className='flex flex-col gap-y-1 p-1 hover:cursor-pointer hover:scale-110 transition-all duration-300 rounded'>
                            <span className="text-xl text-black tracking-wide font-medium "></span>
                        </Link> :  <Link href={`${item.href}`} key={key} className='group flex flex-col gap-y-1 p-1 hover:cursor-pointer hover:scale-110 transition-all duration-300 rounded'>
                            <span className="text-xl text-black transition-all duration-700 hover:text-sky-600 tracking-wide font-medium ">{item.name}</span>
                            <div className="h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:border-sky-600 border-[1px] border-transparent"></div>
                        </Link>
                    ))}
                </div>
                <div className='relative flex flex-col justify-between items-center gap-x-5 p-3 group'>
                    <div className="flex flex-row justify-between items-center gap-x-3">
                        <div className={`w-fit px-5 h-10 flex justify-center items-center ${loginState ? 'bg-neutral-800/90' : 'bg-amber-700/20'} transition-all duration-300 rounded-md group-hover:scale-110`}>
                            <div>
                                {loginState ? <button>
                                    <span className='text-sm font-medium text-gray-300 whitespace-nowrap'>{user.username}</span>
                                </button> :  <button onClick={()=> {
                                        setShowModal(!showModal)
                                    }}>
                                        <span className='text-md font-medium '>Login</span>
                                </button>}  
                            </div>
                        </div>
                        
                    </div>
                    <div className="hidden lg:flex flex-col justify-center items-start gap-y-2 absolute w-full rounded top-14 overflow-hidden bg-white p-2 transition-all duration-300 group-hover:h-fit h-0">
                        {loginState && <>
                            <Link href={`/user/profile`} className="w-full h-10 bg-slate-50 rounded-md flex flex-row justify-around items-center overflow-hidden transition-all duration-300 hover:cursor-pointer">
                                <div>
                                    <Icon.User className={`fill-gray-600`} />
                                </div>
                                <div>
                                    <span className='text-md font-medium text-gray-500 tracking-wide Capitalize'>Profile</span>
                                </div>
                            </Link>
                            <div className="w-full h-10 bg-slate-50 rounded-md flex flex-row justify-around items-center overflow-hidden transition-all duration-300 hover:cursor-pointer" onClick={() => {
                                dispatch(deleteUser())
                                toast.success('You are logged out!!')
                            }}>
                                <div>
                                    <Icon.LogoutIcon className={`fill-gray-600`} />
                                </div>
                                <div>
                                    <span className='text-md font-medium text-gray-500 tracking-wide Capitalize'>Logout</span>
                                </div>
                            </div>
                        </>}
                    </div>
                </div>
                <div className='lg:hidden flex justify-center items-center px-5 h-10 bg-neutral-800 rounded-md' onClick={()=>setShowSidebar(!showSidebar)}>
                    {showSidebar ? <Icon.Close className="fill-gray-300" /> : <Icon.MenuLeft className="fill-gray-300" />}
                </div>
            </div>
            <Modal.Auth loginStatus={loginStatus} setLoginStatus={setLoginStatus} setShowModal={setShowModal} showModal={showModal} />
            <div className={`fixed transition-transform duration-500 top-0 left-0 h-screen bg-white shadow-xl overflow-hidden`}>
                <div className={`transition-all duration-500 ease-in-out ${showSidebar ? 'w-[70vw]' : 'w-0'} h-full flex flex-col justify-center items-center`}>
                    <div className=" w-[80%] flex flex-col justify-center items-center gap-y-5">
                        {NavItems.map((item , key) => (
                            <div key={key} className='flex flex-col gap-y-1 p-1 hover:cursor-pointer hover:scale-110 transition-all duration-300 rounded'>
                                <span className="text-lg text-black tracking-wide">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header